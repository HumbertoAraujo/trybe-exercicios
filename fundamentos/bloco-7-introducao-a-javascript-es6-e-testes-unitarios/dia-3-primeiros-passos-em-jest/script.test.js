// EXEMPO DE TESTE SIMPLES COM ASSERT DO Node.JS
// const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 === 50
// assert.strictEqual(50, 70); // AssertionError: 50 !== 70

// test('array and object equality', () => {
//   const arr = [1, 2 ,3];
//   const obj = { a: 1, b: 2, c: 3};

  // expect(arr).toBe([1, 2, 3]); // fails
  // expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  // expect(arr).toEqual([1, 2, 3]); // OK
  // expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
// });

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/t/ || /e/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });

// const shoppingList = [
//   'diapers',
//   'kleenex',
//   'trash bags',
//   'paper towels',
//   'milk',
// ];

// test('the shopping list has milk on it', () => {
//   expect(shoppingList).toContain('milk');
//   expect(new Set(shoppingList)).toContain('milk');
// });

// function compileAndroidCode() {
//   throw new Error('you are using the wrong JDK');
// }

// test('compiling android goes as expected', () => {
  // expect(() => compileAndroidCode()).toThrow();
  // expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  // expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  // expect(() => compileAndroidCode()).toThrow(/JDK/);
// });

// Object containing house features to be tested
// const houseForSale = {
//   bath: true,
//   bedrooms: 4,
//   kitchen: {
//     amenities: ['oven', 'stove', 'washer'],
//     area: 20,
//     wallColor: 'white',
//     'nice.oven': true,
//   },
//   livingroom: {
//     amenities: [
//       {
//         couch: [
//           ['large', {dimensions: [20, 20]}],
//           ['small', {dimensions: [10, 10]}],
//         ],
//       },
//     ],
//   },
//   'ceiling.height': 2,
// };

// test('this house has my desired features', () => {
//   // Example Referencing
//   expect(houseForSale).toHaveProperty('bath');
//   expect(houseForSale).toHaveProperty('bedrooms', 4);

//   expect(houseForSale).not.toHaveProperty('pool');

//   // Deep referencing using dot notation
//   expect(houseForSale).toHaveProperty('kitchen.area', 20);
//   expect(houseForSale).toHaveProperty('kitchen.amenities', [
//     'oven',
//     'stove',
//     'washer',
//   ]);

//   expect(houseForSale).not.toHaveProperty('kitchen.open');

//   // Deep referencing using an array containing the keyPath
//   expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
//   expect(houseForSale).toHaveProperty(
//     ['kitchen', 'amenities'],
//     ['oven', 'stove', 'washer'],
//   );
//   expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
//   expect(houseForSale).toHaveProperty(
//     'livingroom.amenities[0].couch[0][1].dimensions[0]',
//     20,
//   );
//   expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
//   expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);

//   // Referencing keys with dot in the key itself
//   expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');
// });

const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});