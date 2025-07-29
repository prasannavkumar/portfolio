const scrollButton = document.querySelector('.scrolldown');
const homePage = document.querySelector('.homepage');
const cardContent = document.querySelector('.card-content');
const arrowSpan = scrollButton.querySelector('.arrow');
let atBottom = false;
scrollButton.addEventListener('click', () => {
    if(!atBottom){
        cardContent.scrollIntoView({behavior: 'smooth'});
        scrollButton.style.display = 'none';
    }
    else{
        homePage.scrollIntoView({behavior: 'smooth'});
        scrollButton.style.display = 'block';
    }
});
window.addEventListener('scroll',() => {
    const mainTop= cardContent.getBoundingClientRect();
    const isVisible= mainTop.top< window.innerHeight && mainTop.bottom>0;
    if(isVisible){
        arrowSpan.textContent = '↑';
        atBottom=true;
        scrollButton.style.display = 'none';
    }
    else {
        arrowSpan.textContent = '↓';
        atBottom= false;
        scrollButton.style.display = 'block';
    }
});
