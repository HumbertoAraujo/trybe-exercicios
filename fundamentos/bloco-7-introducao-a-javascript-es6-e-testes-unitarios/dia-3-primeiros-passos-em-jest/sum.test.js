describe('Exercício 1', () => {
  it ('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4 , 5));
  });

  it ('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(sum(0 , 0));
  });

  it ('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {sum(4 , "5")}).toThrow();
  });

  it ('Teste se a função sum lança um erro quando os parâmetros são "4" e 5', () => {
    expect(() => {sum("4" , 5)}).toThrow();
  });

  it ('Teste se a função sum lança um erro quando os parâmetros são "4" e 5', () => {
    expect(() => {sum("4" , 5)}).toThrow('parameters must be numbers');

  });

});

describe('Exercício 2', () => {
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    // expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));

  });

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });

});
const {sum, myRemove } = require('./sum.js');
