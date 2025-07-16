const { Sweet, SweetShop } = require('../src/sweetShop');


//testing for adding
describe('SweetShop', () => {
  test('should add a sweet to the shop', () => {
    const shop = new SweetShop();
    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);

    shop.addSweet(sweet);

    expect(shop.sweets.length).toBe(1);
    expect(shop.sweets[0].name).toBe("Kaju Katli");
  });



  //testing for deleting
  test('should delete a sweet by ID', () => {
  const shop = new SweetShop();
  const sweet1 = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
  const sweet2 = new Sweet(1002, "Gulab Jamun", "Milk-Based", 30, 10);

  shop.addSweet(sweet1);
  shop.addSweet(sweet2);

  shop.deleteSweet(1001);

  expect(shop.sweets.length).toBe(1);
  expect(shop.sweets[0].id).toBe(1002);
});



//testing of purchase and reducing stock
test('should purchase a sweet and reduce stock', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1003, "Rasgulla", "Milk-Based", 25, 10);
  shop.addSweet(sweet);

  shop.purchaseSweet(1003, 3);

  expect(shop.sweets[0].quantity).toBe(7);
});


//checking stock error
test('should throw error if not enough stock during purchase', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1004, "Ladoo", "Gram-Based", 20, 5);
  shop.addSweet(sweet);

  expect(() => {
    shop.purchaseSweet(1004, 10);
  }).toThrow("Not enough stock to complete purchase.");
});



//restock testing
test('should restock a sweet and increase quantity', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1005, "Barfi", "Milk-Based", 40, 5);
  shop.addSweet(sweet);

  shop.restockSweet(1005, 10);

  expect(shop.sweets[0].quantity).toBe(15);
});



test('should throw error if sweet not found during restock', () => {
  const shop = new SweetShop();

  expect(() => {
    shop.restockSweet(9999, 5);
  }).toThrow("Sweet not found.");
});




});
