const headerToggle = document.querySelector('.header-toggle')
const navList = document.querySelector('.nav-list')

headerToggle.addEventListener('click', () => {
    navList.classList.toggle('open')
})

var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper2 = new Swiper(".trendingSwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper3 = new Swiper(".pressSwiper", {
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
