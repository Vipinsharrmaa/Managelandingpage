const body = document.querySelector('body'); 
// Button Hamburger
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");


btnHamburger.addEventListener('click', function () {

    // Open menu
    if (header.classList.contains('open')) {
        body.style.overflow = 'auto'; 
        fadeElems.forEach((elems) => {
            elems.classList.add('fade-out');
            elems.classList.remove('fade-in');
        })
      
        header.classList.remove('open');

    }
    // Open Menu
    else {
        body.style.overflow = 'hidden'; 
        fadeElems.forEach((elems)=>{    
            elems.classList.add('fade-in');
            elems.classList.remove('fade-out');
        })
        
        header.classList.add('open');

    }
})