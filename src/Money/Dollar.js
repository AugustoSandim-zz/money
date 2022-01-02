const Money = require("./index");
class Dollar extends Money {
  constructor(amount) {
    super();
    this._amount = amount;
  }

  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }
}

module.exports = Dollar;
