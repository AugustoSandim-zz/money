import Money from '.';

class Dollar extends Money {
  amount: any;
  
  constructor(amount) {
    super();
    amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

export default  Dollar;
