const form = document.getElementById('novo-item');
const ulList = document.getElementById('list-ul');
const btnSave = document.getElementById('btn-save');
const btnLimp = document.getElementById('btn-load');
let items = JSON.parse(localStorage.getItem('items')) || new Array();

items.forEach((item) => {
  create(item.nome, item.quantidade);
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

  const result = items.find(item => item.nome === nome);
  let id = items.length + 1;
  if (!result) {
    items.push({nome, quantidade, id })
    create(nome, quantidade, id )
  } else {
    result.quantidade = quantidade;
    save();
    window.location.reload(true);
  };
};

function create(nome, quantidade, id) {

  const li = document.createElement('li');
  li.classList.add('item');

  const quant = document.createElement('strong');
  quant.innerHTML = quantidade;
  quant.dataset.id = id;
  li.appendChild(quant);

  li.innerHTML += nome;

  ulList.appendChild(li);
};

function save() {
  localStorage.setItem('items', JSON.stringify(items));
  form[0].focus();
};

btnSave.addEventListener('click', save);

btnLimp.addEventListener('click', function() {
  localStorage.clear();
  window.location.reload(true);
  form[0].focus();
});
