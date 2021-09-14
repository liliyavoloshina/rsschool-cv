const navBtn = document.querySelector('#navBtn'),
  navList = document.querySelector('#navList'),
  removeBubbles = document.querySelector('#removeBubbles'),
  bubbles = document.querySelectorAll('.circle')

navBtn.addEventListener('click', toggleMenu)
removeBubbles.addEventListener('click', toggleBubbles)

function toggleMenu() {
  navBtn.classList.toggle('opened')
  navList.classList.toggle('opened')
}

function toggleBubbles() {
  bubbles.forEach(b => b.classList.toggle('hidden'))
  removeBubbles.textContent === 'Remove Bubbles'
    ? (removeBubbles.textContent = 'Add Bubbles!')
    : (removeBubbles.textContent = 'Remove Bubbles')
}

document.addEventListener('click', function(event) {
  if (
    navList.classList.contains('opened') &&
    !event.target.closest('#navBtn')
  ) {
    navBtn.classList.remove('opened')
    navList.classList.remove('opened')
  }
})

const selfCheck = `
Score: 150
✅ Вёрстка валидная +10
✅ Вёрстка семантическая +20
✅ Для оформления СV используются css-стили +10
✅ Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
✅ Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
✅ Есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным +10
✅ На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
✅ Контакты для связи и перечень навыков оформлены в виде списка ul > li +10
✅ CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
✅ CV содержит пример кода с подсветкой. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10
✅ CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке +10
✅ CV выполнено на английском языке +10
✅ Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка +10
✅ Есть видеорезюме CV на английском языке. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена его транскрипция на английском языке +10
✅ Качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10
`

console.log(selfCheck)
