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
 *  Tornar “quantidade” privada | CHECKED
 *  Efeitos colaterais em Dollar? | CHECKED
 *  Arredondamento de dinheiro?
 *  equals() | CHECKED
 *  hashCode()
 *  Igualdade de null
 *  Igualdade de objeto
 *  5 CHF * 2 = 10 CHF | CHECKED
 *  Duplicação de Dólar/Franco
 *  Igualdade comum | CHECKED
 *  Multiplicação comum
 *  Comparar Francos com Dólares
 */

const Dollar = require("./Dollar");
const Franc = require("./Franc");

describe("Money", () => {
  it("Should be Dollar multiplication", () => {
    const five = new Dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  });

  it("Should be equality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
  });

  it("Should be Franc multiplication", () => {
    const five = new Franc(5);
    expect(new Franc(10)).toEqual(five.times(2));
    expect(new Franc(15)).toEqual(five.times(3));
  });
});
