if (theme1_inp.checked) {
    toggle1.classList.add('display');
} else if (theme2_inp.checked) {
    toggle2.classList.add('display');
}

theme1_inp.addEventListener('change', (event) => {
    changeThemeToggle();
});
theme2_inp.addEventListener('change', (event) => {
    changeThemeToggle();
});





const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme == 'theme2') {
        theme1_inp.checked = false;
        theme2_inp.checked = true;
    } else {
        theme2_inp.checked = false;
        theme1_inp.checked = true;
    }
    changeThemeToggle();
}


theme1_inp.addEventListener('change', (event) => {
    event.preventDefault();
    if (theme1_inp.checked) {
        changeTheme("theme1");
    }
});
theme2_inp.addEventListener('change', (event) => {
    event.preventDefault();
    if (theme2_inp.checked) {
        changeTheme("theme2");
    }
});

function changeTheme(element) {
    document.documentElement.setAttribute('data-theme', element);
    localStorage.setItem('theme', element);
}
function changeThemeToggle() {
    if (theme2_inp.checked) {
        toggle2.classList.add('display');
        toggle1.classList.remove('display');
    } else {
        toggle2.classList.remove('display');
        toggle1.classList.add('display');
    }
}