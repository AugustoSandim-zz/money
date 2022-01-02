class Money {
  _amount;

  equals(object) {
    return object instanceof Money && this._amount === object._amount;
  }
}

module.exports = Money;
