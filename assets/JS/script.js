const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const hLinks = document.querySelectorAll('#hLink');


menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
});

hLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
    })
});

