let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let section= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');
window.onscroll = () => {
  section.forEach(sec => {
    let top= window.scrollY;
    let offset = sec.offsetTop - 150;
    let height= sec.offsetHeight;
    let id= sec.getAttribute('id');

    if(top >= offset && top< offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  });
}
function changeBg(){
    var navbar = document.getElementById('logo');
    var scrollValue = window.scrollY;
    if(scrollValue<600){
        navbar.classList.remove('bgcolor');
    }
    else{
        navbar.classList.add('bgcolor');
    }
}
window.addEventListener('scroll', changeBg);  

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }
  );
  menuIcon.classList.remove(bx-x);
  navbar.classList.remove('active');