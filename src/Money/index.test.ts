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

/**
 * @TODO:
 * $5 + 10 CHF = $10 se a taxa é 2:1
 * $5 * 2 = $10
 * [x] - Tornar “quantidade” privada
 * [x] - Efeitos colaterais em Dollar?
 * - Arredondamento de dinheiro?
 * [x] - equals()
 * - hashCode()
 * - Igualdade de null
 * - Igualdade de objeto
 * [x] - 5 CHF * 2 = 10 CHF
 * - Duplicação de Dólar/Franco
 * - Igualdade comum
 * - Multiplicação comum
 * [x] - Comparar Francos com Dólares
 * - Moeda?
 */

import Dollar from "./Dollar"
import Franc from "./Franc"
import Money from "./"

describe("Money", () => {
  it("Should be Dollar multiplication", () => {
    const money = new Money();
    const five = money.dollar(5);
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
