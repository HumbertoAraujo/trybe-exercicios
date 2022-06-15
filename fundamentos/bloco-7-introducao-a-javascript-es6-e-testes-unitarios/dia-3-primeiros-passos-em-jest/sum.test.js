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

// 

describe('Exercício 4', () => {
  it ('1-Teste se encode e decode são funções', () => {
    expect(typeof(encode) && typeof(encode)).toBe('function');
  });

  it ('2-Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('maeioum')).toBe('m12345m');
  });

  it ('3-Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it ('4-Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('qwrtypsdfghjklzxcvbnm') && decode('qwrtypsdfghjklzxcvbnm')).toEqual('qwrtypsdfghjklzxcvbnm');
  });

  it ('5-Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('teste').length && decode('teste').length).toEqual(5);
  });

});

// 

describe('Exercício 5 - Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Exercício 6 - Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

// ######################################################################################

describe('Exercício Bônus', () => {
  it ('1-Teste se a função searchEmployee existe', () => {
    expect(typeof(searchEmployee)).toBe('function');
  });

  it ('2-Teste se passando o id do Funcionário como primeiro parâmetro, e o nome de uma chave, se retorna o objeto correto do funcionário', () => {
    expect(searchEmployee('9852-2-2', 'lastName' )).toEqual(
      {
        id: '9852-2-2',
        firstName: 'Jeff',
        lastName: 'Cook',
        specialities: ['Ruby', 'SQL'],
      }
    );
  });

  it ('3-Teste passando um ID que não consta no cadastro, deve retornar o erro "ID não identificada"', () => {
    expect(searchEmployee('1234-5')).toEqual("ID não identificada");
  });

  it ('4-Teste se a informação passada no segundo parâmetro não existir, deve retornar o erro "Informação indisponível"', () => {
    expect(searchEmployee('4678-2' , 'age')).toEqual('"Informação indisponível"');
  });
});

const {sum , myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee} = require('./sum.js');
