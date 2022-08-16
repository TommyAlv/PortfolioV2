const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const hLinks = document.querySelectorAll('#hLink');
const avatarPhoto = document.querySelector('#avatarPhoto');
const body = document.querySelector('body');
const dayRobot = document.querySelector('.dayRobot');
const darkRobot = document.querySelector('.darkRobot');



menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
});

hLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
    })
});

avatarPhoto.addEventListener('click', () => {
    body.classList.toggle('dark')
});


