document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.navbar ul');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
