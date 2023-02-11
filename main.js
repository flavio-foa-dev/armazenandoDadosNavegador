const form = document.getElementById('novo-item');
const ulList = document.getElementById('list-ul')

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const item = {}
    for (const element of form){
      item[element.name] = element.value
    }

   create(item)
})

function create({nome, quantidade}) {
  console.table(quantidade, nome)

  const li = document.createElement('li')
  li.classList.add('item')

  const quant = document.createElement('strong')
  quant.innerHTML = quantidade

  li.appendChild(quant)
  li.innerHTML += nome


  ulList.appendChild(li)
}