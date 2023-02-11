const form = document.getElementById('novo-item');
const ulList = document.getElementById('list-ul')

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const item = {}
    for (const element of form){
      item[element.name] = element.value
    }
   create(item)
   clenItem()
})

function clenItem(){
 form[0].value = ""
 form[1].value = ""
 form[0].focus()
}

function create({nome, quantidade}) {
  if (!nome || !quantidade) return null

  const li = document.createElement('li')
  li.classList.add('item')

  const quant = document.createElement('strong')
  quant.innerHTML = quantidade
  li.appendChild(quant)

  li.innerHTML += nome

  ulList.appendChild(li)
}

