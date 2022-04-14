// Check if the user has already selected a theme preference and applies it. To be called on page load across all pages.
function startupTheme(){
    if(window.localStorage.getItem('dark') == null || window.localStorage.getItem('dark') == 'no'){
        window.localStorage.setItem('dark', 'no');
        document.body.setAttribute("theme", "light");
    } else{
        document.body.setAttribute("theme", "dark");
    }
}

// Checks the current theme selection then switches it. To be called on button press.
function lightSwitch() {
    if(window.localStorage.getItem('dark') == 'no'){
        document.body.setAttribute("theme", "dark");
        window.localStorage.setItem('dark', 'yes');
    } else{
        document.body.setAttribute("theme", "light");
        window.localStorage.setItem('dark', 'no');
    }
}