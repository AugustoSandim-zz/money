// 1 - Precisamos ser capazes de somar valores em duas moedas diferentes e de converter
//     o resultado, dado um conjunto de taxas de cambio.
// 2 - Precisamos ser capazes de multiplicar um valor (preço por ação) por um número (numeros de ações)
//     e de receber uma quantia.

describe("Money", () => {
  it("Should be multiplication", () => {
    Dollar five = new Dollar(5);
    five.times(2);
    expect(five.amount).toEqual(10);
  });
});
