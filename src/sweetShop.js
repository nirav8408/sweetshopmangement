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
    this.sweets = this.sweets.filter((sweet) => sweet.id !== id);
  }

  purchaseSweet(id, quantity) {
    const sweet = this.sweets.find((s) => s.id == id);
    if (!sweet) throw new Error("Sweet not found.");

    if (sweet.quantity < quantity) {
      throw new Error("Not enough stock to complete purchase.");
    }

    sweet.quantity -= quantity;
  }

  restockSweet(id, quantity) {
    const sweet = this.sweets.find((s) => s.id == id);
    if (!sweet) throw new Error("Sweet not found.");
    sweet.quantity += quantity;
  }
}

module.exports = { Sweet, SweetShop };
