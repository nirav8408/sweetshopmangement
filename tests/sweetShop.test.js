const { Sweet, SweetShop } = require('../src/sweetShop');

describe('SweetShop', () => {
  test('should add a sweet to the shop', () => {
    const shop = new SweetShop();
    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);

    shop.addSweet(sweet);

    expect(shop.sweets.length).toBe(1);
    expect(shop.sweets[0].name).toBe("Kaju Katli");
  });


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

});
