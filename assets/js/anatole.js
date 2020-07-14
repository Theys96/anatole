// initialize default value
function getTheme(){
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
}

function setTheme(style){
    document.documentElement.setAttribute('data-theme', style);
    localStorage.setItem('theme', style);  
}

function init(){
    // initialize default value
    var theme = getTheme();

    // check if a prefered color theme is set for users that have never been to our site
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === null) {
        if(userPrefersDark){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
    else {
        // load a stored theme
        if (theme == 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }    
    }    
}


// switch themes
function switchTheme(e) {
    var theme = getTheme();
    if (theme == 'light') {
        setTheme('dark');
    }
    else {
        setTheme('light');
    }
}

// Toggle phone view
function togglePhone(e) {
    console.log($('#phone'))
    if ($('#phone').is(":visible")) {
        $('#phone').fadeOut();
    } else {
        $('#phone').fadeIn();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var themeSwitcher = document.querySelector('.theme-switch');
    themeSwitcher.addEventListener('click', switchTheme, false);

    var phoneToggle = document.querySelector('.phone-toggle');
    if (phoneToggle) {
        phoneToggle.addEventListener('click', togglePhone, false);
    }
}, false);

init();
