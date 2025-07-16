const { Sweet, SweetShop } = require('../src/sweetShop');

describe('SweetShop', () => {
  test('should add a sweet to the shop', () => {
    const shop = new SweetShop();
    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);

    shop.addSweet(sweet);

    expect(shop.sweets.length).toBe(1);
    expect(shop.sweets[0].name).toBe("Kaju Katli");
  });
});
