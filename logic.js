function isBelowMiddle(element) {
    const rect = element.getBoundingClientRect();
    const mid = (rect.top + rect.bottom) / 2
    return mid < window.innerHeight / 2
}

function handleScroll() {
    const elements = document.querySelectorAll('.animate__sliding');

    elements.forEach(element => {
        if (!isBelowMiddle(element)) {
        element.classList.add('animate__slide-in');
        element.classList.remove('animate__slide-out');
        } else {
        element.classList.add('animate__slide-out');
        element.classList.remove('animate__slide-in');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();