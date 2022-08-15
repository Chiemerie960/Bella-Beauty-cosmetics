const navigation = document.querySelector('.navlinks');
const btn = document.querySelector('.hamburger');
const modal = document.querySelector('.modal')
const body = document.querySelector('.body')
btn.addEventListener('click', () => {
  navigation.classList.toggle('active')
})
modal.addEventListener('click', (e) => {
  e.preventDefault()
  body.classList.add('blur')
})