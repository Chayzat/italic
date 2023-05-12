const headerToggle = document.querySelector('.header-toggle')
const navList = document.querySelector('.nav-list')

headerToggle.addEventListener('click', () => {
    navList.classList.toggle('open')
})