let theme = localStorage.getItem('theme');

if (theme === null) {
    setTheme('light');
}else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('clicked', mode)
        setTheme(mode)
    })
    
}

function setTheme(mode) {
    switch (mode) {
        case 'light':
            document.getElementById('theme-style').href = '/theme-css/default.css'
            break;
        case 'blue':
            document.getElementById('theme-style').href = '/theme-css/style_1.css'
            break;
        case 'green':
            document.getElementById('theme-style').href = 'theme-css/style_2.css'
            break;
        case 'purple':
            document.getElementById('theme-style').href = 'theme-css/style_3.css'
            break;
    
        default:
            document.getElementById('theme-style').href = 'theme-css/default.css'
            break;
    }

    localStorage.setItem('theme', mode)

}