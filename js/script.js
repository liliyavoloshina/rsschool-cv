const navBtn = document.querySelector('#navBtn')

navBtn.addEventListener('click', toggleMenu)


function toggleMenu() {
  navBtn.classList.toggle('opened')
}