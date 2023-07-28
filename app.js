'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Тёмная";
    } else {
        this.textContent = "Светлая";
    }

    console.log('current class name: ' + className); // отображение действий в консоли
});
