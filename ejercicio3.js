//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const container = document.querySelector('div[data-function="printHere"]')
const ul = document.createElement('ul')
countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})
container.appendChild(ul)
//1.2
const elementToRemove = document.querySelector('.fn-remove-me')
if (elementToRemove) {
  elementToRemove.remove()
}
//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const carUl = document.createElement('ul')
cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  carUl.appendChild(li)
})
container.appendChild(carUl)
//1.4
const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
countries.forEach((country) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = country.title
  const img = document.createElement('img')
  img.src = country.imgUrl
  img.alt = country.title
  div.appendChild(h4)
  div.appendChild(img)
  document.body.appendChild(div)
})
