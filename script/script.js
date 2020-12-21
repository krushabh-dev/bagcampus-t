var owl = $('.owl-carousel');
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        769: {
            items: 3
        }
    }
})

var btxt = document.getElementById('btxt');
var word = btxt.getElementsByTagName('span');
var i = 0;
function rotator() {
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}
setInterval(rotator, 800);
