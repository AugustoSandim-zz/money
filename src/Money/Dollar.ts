import Money from '.';

class Dollar extends Money {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

export default  Dollar;
