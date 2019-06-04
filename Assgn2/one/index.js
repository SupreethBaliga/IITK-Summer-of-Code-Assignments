var index = 1;
// document.body.onload = function start() {
//     displaySlides(index);
// }

function nextSlide() {
    if (index == 6) return;
    document.getElementById("imgs").style.transform = 'translateX(-' + 900 * index + 'px)';
    index++;
}

function prevSlide(n) {
    if (index == 1) return;
    document.getElementById("imgs").style.transform = 'translateX(-' + 900 * (index - 2) + 'px)';
    index--;
}