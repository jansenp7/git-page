const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }

        console.log(element.offsetTop);
    })
}

animeScroll();

window.addEventListener('scroll', function() {
    animeScroll();
})