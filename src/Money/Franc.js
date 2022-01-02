const Money = require("./index");
class Franc extends Money {
  constructor(amount) {
    super();
    this._amount = amount;
  }

  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }
}

module.exports = Franc;
