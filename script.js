 var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
  //aos animation
  AOS.init();

  let menu=document.querySelector('.bx-menu');
let navbar=document.querySelector('.menu');
menu.onclick = ()=>
    {
     menu.classList.toggle('bx-x');
     navbar.classList.toggle('active');
    }
    window.onscroll=()=>{
     menu.classList.remove('bx-x');
     navbar.classList.remove('active');
    
    }
          