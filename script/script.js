var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});

var btxt = document.getElementById('btxt');
var word = btxt.getElementsByTagName('span');
var i = 0;
function rotator() {
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}
setInterval(rotator, 800);
