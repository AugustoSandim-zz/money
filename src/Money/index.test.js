// 1 - Precisamos ser capazes de somar valores em duas moedas diferentes e de converter
//     o resultado, dado um conjunto de taxas de cambio.
// 2 - Precisamos ser capazes de multiplicar um valor (preço por ação) por um número (numeros de ações)
//     e de receber uma quantia.

/**
 *
 * 1. Adicione um pequeno teste
 * 2. Rode todos os testes e falhe
 * 3. Faça uma pequena mudança
 * 4. Rode os testes e seja bem-sucedido
 * 5. Refatore para remover duplicação
 */

/**  $5 + 10 CHF = $10 se a taxa é 2:1
 *  $5 * 2 = $10 | CHECKED
 *  Tornar “quantidade” privada
 *  Efeitos colaterais em Dollar? | CHECKED
 *  Arredondamento de dinheiro?
 *  equals()
 *  hashCode()
 *  Igualdade de null
 *  Igualdade de objeto
 */

const Dollar = require("./index");

describe("Money", () => {
  it("Should be multiplication", () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(new Dollar(10)).toEqual(product);
    product = five.times(3);
    expect(new Dollar(15)).toEqual(product);
  });

  it("Should be equality", () => {
    const five = new Dollar(5);
    const six = new Dollar(6);
    const anotherFive = new Dollar(5);
    expect(five.equals(anotherFive)).toBeTruthy();
    expect(five.equals(six)).toBeFalsy();
  });
});
