document.addEventListener('DOMContentLoaded', function() {
    console.log('dom loaded');

    var slideOne = new Slide('Title 1', 'This is some text 1', 'avatar.svg');
    var slideTwo = new Slide('Title 2', 'This is some text 2', 'avatar.svg');
    var slideThree = new Slide('Title 3', 'This is some text 3', 'avatar.svg');
    
    var container = document.querySelector('.testamonialSlider');

    var slider = new Slider(container, [slideOne, slideTwo, slideThree]);
    slider.render();
});