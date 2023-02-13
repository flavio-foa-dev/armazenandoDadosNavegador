const form = document.getElementById('novo-item');
ulItem = document.getElementById('list-ul');
const btnLimp = document.getElementById('btn-load');
const btnSave = document.getElementById('btn-save');

let items = JSON.parse(localStorage.getItem('items')) || new Array();
class TravelBag {
  constructor(nome, quantidade) {
    this.nome = nome;
    this.quantidade = quantidade;
  }

  static saveStorage() {
    localStorage.setItem('items', JSON.stringify(items));
    window.location.reload(true);
    form[0].focus();
    }

  verifyItem() {
    const result = items.find(item => item.nome === this.nome);
    if(!result){
      this.parseElement();
    } else {
      const indexItem = items.findIndex(item => item.id === result.id);
      items[indexItem].quantidade = this.quantidade;
      TravelBag.saveStorage();
      console.log("ja existe", items);
    }
  }

  parseElement() {
    if (!this.nome || !this.quantidade) return null
    const item = {
      "nome": this.nome,
      "quantidade": this.quantidade,
      "id": Math.ceil(Math.random() * 10000) * 2
    }
    items.push(item);
    TravelBag.saveStorage();
  }

  static createElement({nome, quantidade, id}) {
    const li = document.createElement("li");
    li.classList.add('item');

    const itemQuantity = document.createElement("strong");
    itemQuantity.innerHTML = quantidade;
    itemQuantity.dataset.id = id;
    li.appendChild(itemQuantity);

    li.innerHTML += nome;


    li.appendChild(this.createBtn(id));

    ulItem.appendChild(li);
  }

  static createBtn(id) {
    const btn = document.createElement('button');
    btn.innerText = "x";

    btn.addEventListener("click", function() {
      const indexItem = items.findIndex((item) => item.id === id);
      items.splice(indexItem, 1);
      TravelBag.saveStorage();
    })
    return btn;
  }

  static destroyStorage() {
    localStorage.clear();
    window.location.reload(true);
    form[0].focus();
  }
}

items.forEach((item) => {
  TravelBag.createElement(item);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = e.target.nome.value;
  const quantidade = e.target.quantidade.value;
  const item = new TravelBag(nome, quantidade);
  item.verifyItem();
})

btnLimp.addEventListener('click', TravelBag.destroyStorage);
btnSave.addEventListener('click', TravelBag.saveStorage);
