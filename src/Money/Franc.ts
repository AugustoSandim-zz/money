import Money from '.';

class Franc extends Money {
  amount: any;

  constructor(amount) {
    super();
    amount = amount;
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}

export default Franc;
