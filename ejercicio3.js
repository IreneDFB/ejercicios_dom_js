const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const container = document.querySelector('div[data-function="printHere"]')
const ul = document.createElement('ul')
countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})
container.appendChild(ul)
