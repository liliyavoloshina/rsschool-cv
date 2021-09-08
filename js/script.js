const navBtn = document.querySelector('#navBtn'),
navList = document.querySelector('#navList')

navBtn.addEventListener('click', toggleMenu)


function toggleMenu() {
  navBtn.classList.toggle('opened')
  navList.classList.toggle('opened')
}