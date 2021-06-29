const leftTarget = document.querySelectorAll('.left');
const rightTarget = document.querySelectorAll('.right');

function scrollAnimation() {
    const topSize = window.pageYOffset + ((window.innerHeight * 3) / 4);
    console.log(topSize);
    leftTarget.forEach(element => {
        if (topSize > element.offsetTop) {
            console.log(element.offsetTop);
            element.style.animation = 'insertAnim 2s forwards'
        } else {

        }
    });
    rightTarget.forEach(element => {
        if (topSize > element.offsetTop) {
            console.log(element.offsetTop);
            element.style.animation = 'insertAnim 2s forwards'
        }
    });
}

window.addEventListener('scroll', () => {
    scrollAnimation();
})