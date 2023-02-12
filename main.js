const form = document.getElementById('novo-item');
const ulList = document.getElementById('list-ul');
const btnSave = document.getElementById('btn-save');
const btnLimp = document.getElementById('btn-load');
let items = JSON.parse(localStorage.getItem('items')) || new Array();

items.forEach((item) => {
  create(item);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const item = {};
    for (const element of form){
      item[element.name] = element.value;
    }
  parseItens(item);
  clenItem();
});

function clenItem() {
  form[0].value = "";
  form[1].value = "";
  form[0].focus();
};

function parseItens({nome, quantidade}) {
  if (!nome || !quantidade) return null;

  const isItem = items.find(item => item.nome === nome);

  const item = {
    "nome": nome,
    "quantidade": quantidade
  };

  if (isItem) {
    item.id = isItem.id;
    updateItem(item);
    items[isItem.id] = item;
    save();
  } else {
    item.id = items.length;
    create(item);
    items.push(item);
    save();
  };
};

function create({nome, quantidade, id}) {

  const li = document.createElement('li');
  li.classList.add('item');

  const quant = document.createElement('strong');
  quant.innerHTML = quantidade;
  quant.dataset.id = id;
  li.appendChild(quant);

  li.innerHTML += nome;

  li.appendChild(createBtn());

  ulList.appendChild(li);
};

function save() {
  localStorage.setItem('items', JSON.stringify(items));
  form[0].focus();
};

function updateItem (item) {

  let parseId = `[data-id="${item.id}"]`;

  const result = document.querySelector(parseId);
  result.innerHTML = item.quantidade;
}

btnSave.addEventListener('click', save);

btnLimp.addEventListener('click', function() {
  localStorage.clear();
  window.location.reload(true);
  form[0].focus();
});

function createBtn(){
  let btn = document.createElement('button');
  btn.innerText = "x";
  btn.addEventListener("click", function() {
    destroy();
  })

  return btn;
}

function destroy(){
  console.log("destroy")
}
