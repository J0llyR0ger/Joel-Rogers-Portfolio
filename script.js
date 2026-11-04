const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 menu.textContent = open ? 'Close −' : 'Menu +';
 nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
 menu.setAttribute('aria-expanded', 'false');
 menu.textContent = 'Menu +';
 nav.classList.remove('open');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
