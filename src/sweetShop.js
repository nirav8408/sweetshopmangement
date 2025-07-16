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
  this.sweets = this.sweets.filter(sweet => sweet.id !== id);
    }

}

module.exports = { Sweet, SweetShop };
