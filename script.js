let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => 
{
    menu.classList.toggle('ri');
    navlist.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        distance: '32px',
        duration: 1200,
        reset: true
    });

    sr.reveal('.main-content h1', {delay: 300, origin: 'left'});
    sr.reveal('.main-content p', {delay: 400, origin: 'bottom'});
    sr.reveal('.button', {delay: 500, origin: 'right'});
});
