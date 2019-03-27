document.addEventListener('DOMContentLoaded', function() {
    console.log('dom loaded');

    var slideOne = new Slide('Title 1', 'This is some text 1', 'avatar.svg');
    var slideTwo = new Slide('Title 2', 'This is some text 2', 'avatar.svg');
    var slideThree = new Slide('Title 3', 'This is some text 3', 'avatar.svg');
    
    var container = document.querySelector('.testamonialSlider');

    var slider = new Slider(container, [slideOne, slideTwo, slideThree]);
    slider.render();














    
    //    setBackgroundOpacity();
    
        // document.querySelector('#menuItemPortfolio').addEventListener('click', function(evt) {
        //     evt.preventDefault();
        //     smoothScroll('.portfolio', 1000);
        // });
    
        // document.querySelector('#learnMore').addEventListener('click', function(evt) {
        //     evt.preventDefault();
        //     smoothScroll('.portfolio', 1000);
        // });
    
        // document.querySelector('#menuItemAbout').addEventListener('click', function(evt) {
        //     evt.preventDefault();
        //     smoothScroll('.about', 1000);
        // });
    
        // document.querySelector('#menuItemServices').addEventListener('click', function(evt) {
        //     evt.preventDefault();
        //     smoothScroll('.servicesContainer', 1000);
        // });
    
    
        // document.querySelector('#menuItemContact').addEventListener('click', function(evt) {
        //     evt.preventDefault();
        //     smoothScroll('.contact', 1000);
        // });
    
        if (document.querySelector('.hamburger') !== null) {
            document.querySelector('.hamburger').addEventListener('click', function(evt) {
                this.classList.toggle('isActive');


                document.querySelector('.navBar').classList.toggle('mobileMenuShowing');
                document.querySelector('.mobileMenu').classList.toggle('active');
            });
        }
        
    
    


});