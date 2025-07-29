const iconbar = document.querySelector('header .iconbar');
const pageNav = document.querySelector('header .pageNavigation');
const logo = document.querySelector('header .logo');
const xSymbol = document.querySelector('header .close');
iconbar.addEventListener('click', ()=>{
    pageNav.classList.toggle('show');
    iconbar.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    xSymbol.classList.toggle('show');
});
xSymbol.addEventListener(('click'),()=>{
    pageNav.classList.toggle('show');
    iconbar.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    xSymbol.classList.toggle('show');
});