class Sweet {
  constructor(id, name, category, price, quantity) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}

class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    this.sweets.push(sweet);
  }

  deleteSweet(id) {
    this.sweets = this.sweets.filter(s => s.id != id);
  }

  getAllSweets() {
    return this.sweets;
  }

  purchaseSweet(id, quantity) {
  const sweet = this.sweets.find(s => s.id == id);
  if (!sweet) throw new Error("Sweet not found.");

  if (sweet.quantity < quantity) {
    throw new Error("Not enough stock to complete purchase.");
  }

  sweet.quantity -= quantity;
}

restockSweet(id, quantity) {
  const sweet = this.sweets.find(s => s.id == id);
  if (!sweet) throw new Error("Sweet not found.");

  sweet.quantity += quantity;
}



}

const shop = new SweetShop();

function addSweet() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  const sweet = new Sweet(id, name, category, price, quantity);
  shop.addSweet(sweet);

  renderTable();
  clearInputs();
}

function deleteSweet(id) {
  shop.deleteSweet(id);
  renderTable();
}

function renderTable() {
  const tbody = document.getElementById("sweetTable");
  tbody.innerHTML = "";

  shop.getAllSweets().forEach(sweet => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${sweet.id}</td>
      <td>${sweet.name}</td>
      <td>${sweet.category}</td>
      <td>${sweet.price}</td>
      <td>${sweet.quantity}</td>
      <td>
        <button onclick="deleteSweet(${sweet.id})">Delete</button>
        <button onclick="purchaseSweet(${sweet.id})">Buy</button>
         <button onclick="restockSweet(${sweet.id})">Restock</button>
    </td>`;
    tbody.appendChild(row);
  });
}

function clearInputs() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}




function purchaseSweet(id) {
  const qty = prompt("Enter quantity to purchase:");
  if (qty === null) return;

  try {
    shop.purchaseSweet(id, parseInt(qty));
    alert("Purchase successful!");
  } catch (err) {
    alert(err.message);
  }

  renderTable();
}


function restockSweet(id) {
  const qty = prompt("Enter quantity to restock:");
  if (qty === null) return;

  try {
    shop.restockSweet(id, parseInt(qty));
    alert("Restock successful!");
  } catch (err) {
    alert(err.message);
  }

  renderTable();
}
