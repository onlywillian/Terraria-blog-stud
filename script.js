const leftTarget = document.querySelectorAll('.left');
const rightTarget = document.querySelectorAll('.right');

function scrollAnimation() {
    const topSize = window.pageYOffset;
    console.log(topSize);
    leftTarget.forEach(element => {
        if (topSize > element.offsetTop) {
            element.style.animation = 'insertAnim 2s forwards'
        }
    });
    rightTarget.forEach(element => {
        if (topSize > element.offsetTop) {
            element.style.animation = 'insertAnim 2s forwards'
        }
    });
}

window.addEventListener('scroll', () => {
    scrollAnimation();
})