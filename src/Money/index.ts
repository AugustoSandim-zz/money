const Dollar = require("./Dollar");
class Money {
  protected amount;

  equals(object) {
    return (
      object instanceof Money &&
      this.amount === object.amount &&
      this.constructor.name === object.constructor.name
    );
  }

  // dollar(amount) {
  //   return new Dollar(5);
  // }
}

export default Money;
