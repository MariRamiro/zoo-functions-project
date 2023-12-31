const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento "count", deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Para o argumento "names" deve retornar um array de nomes que possui o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Para o argumento "averageAge" deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Para um argumento diferente de uma string, retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(typeof param !== 'string')).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Para o argumento "undefined", retorna "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Para um argumento inválido retorna null', () => {
    expect(handlerElephants('cats')).toBe(null);
  });
  it('Para uma chave do objeto retorna o proprio valor', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
