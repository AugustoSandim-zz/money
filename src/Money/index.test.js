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

//  $5 + 10 CHF = $10 se a taxa é 2:1
//  $5 * 2 = $10 | CHECKED
//  Tornar “quantidade” privada
//  Efeitos colaterais em Dollar?
//  Arredondamento de dinheiro?
class Dollar {
  constructor(amount) {
    this.amount = amount;
  }
  times(multiplier) {
    this.amount *= multiplier;
  }
}

describe("Money", () => {
  it("Should be multiplication", () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toEqual(10);
  });
});
