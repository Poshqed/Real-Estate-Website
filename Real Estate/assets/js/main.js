/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("header");
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  scrollHeight > headerHeight
    ? header.classList.add("fixed")
    : header.classList.remove("fixed");
});

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper(".popular-container", {
  spaceBetween: 50,
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== VALUE ACCORDION ===============*/
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", (e) => {
    const parentEl = e.currentTarget.parentElement;
    parentEl.classList.toggle("open-accordion");
    accordionHeader.forEach((item) => {
      if (item != header) {
        item.parentElement.classList.remove("open-accordion");
      }
    });
  });
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - headerHeight;
    const navEl = document.querySelector(`[href="#${sectionId}"]`);
    if(navEl){
        if (
            scrollHeight > sectionTop &&
            scrollHeight < sectionHeight + sectionTop
          ) {
            navEl.classList.add("active");
          } else {
            navEl.classList.remove("active");
          }
    }
    
  });
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.querySelector('.scroll-up');
window.addEventListener('scroll', ()=>{
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 500){
    scrollUp.classList.add('show-scroll-up');
  }else{
    scrollUp.classList.remove('show-scroll-up');
  }
})
/*=============== DARK LIGHT THEME ===============*/
const themeBtn = document.querySelector('.theme-button');
const buttonChild = themeBtn.firstElementChild;
themeBtn.addEventListener('click', ()=>{
  if(buttonChild.classList.contains('fa-moon')){
    localStorage.setItem('theme', 'dark');
    buttonChild.classList.replace('fa-moon', 'fa-sun');
    document.body.classList.add('dark-theme');
  }else if(buttonChild.classList.contains('fa-sun')){
    localStorage.setItem('theme', 'light');
    buttonChild.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.remove('dark-theme');
  }
});
window.addEventListener('DOMContentLoaded', ()=>{
  const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
  if(theme == 'dark'){
    buttonChild.classList.replace('fa-moon', 'fa-sun');
    document.body.classList.add('dark-theme');
  }else if(theme == 'light'){
    buttonChild.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.remove('dark-theme');
  }
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
  origin : 'top',
  distance: '60px',
  duration: '2500', 
  delay:'400',
  reset:false
});

scrollReveal.reveal('.home-title');
scrollReveal.reveal('.home-description', {delay: 500})
scrollReveal.reveal('.home-search', {delay: 600})
scrollReveal.reveal('.home-value', {delay: 700})
scrollReveal.reveal('.home-images', {delay: 800, origin:'bottom'});
scrollReveal.reveal('.logo img', {interval:100});
scrollReveal.reveal('.value-img, .contact-data', {origin:'left'})
scrollReveal.reveal('.value-data, .contact-image', {origin:'right'})
scrollReveal.reveal('.subscribe-container',)


