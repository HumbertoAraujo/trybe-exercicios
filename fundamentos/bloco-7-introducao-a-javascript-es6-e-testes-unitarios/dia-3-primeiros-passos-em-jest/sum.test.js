describe('Exercício 1', () => {
  it ('1-Teste se o retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4 , 5));
  });

  it ('2-Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(sum(0 , 0));
  });

  it ('3-Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {sum(4 , "5")}).toThrow();
  });

  it ('4-Teste se a função sum lança um erro quando os parâmetros são "4" e 5', () => {
    expect(() => {sum("4" , 5)}).toThrow();
  });

  it ('5-Teste se a função sum lança um erro quando os parâmetros são "4" e 5', () => {
    expect(() => {sum("4" , 5)}).toThrow('parameters must be numbers');

  });

});

describe('Exercício 2', () => {
  it ('1-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it ('2-Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    // expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));

  });

  it ('3-Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});

// 

describe('Exercício 3', () => {
  it ('1-Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it ('2-Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });

  it ('3-Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  it ('4-Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(8)).toEqual(8);
  });

  it ('5-Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('15')).toBe(false);

  });

});

const {sum, myRemove, myFizzBuzz } = require('./sum.js');
