const navigation = document.querySelector('.navlinks');
const btn = document.querySelector('.hamburger');
const modal = document.querySelector('.modal')
const body = document.querySelector('.body')
const close = document.querySelector('.close')
const doc = document.querySelector('body')
btn.addEventListener('click', () => {
  navigation.classList.toggle('active')
})
modal.addEventListener('click', (e) => {
  e.preventDefault()
  body.classList.add('blur')
  doc.setAttribute('style',  "overflow: hidden;")
})
close.addEventListener('click', (e) => {
  body.classList.remove('blur')
  doc.setAttribute('style',  "overflow: auto;")
})