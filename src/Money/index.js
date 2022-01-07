class Money {
  _amount;

  equals(object) {
    return (
      object instanceof Money &&
      this._amount === object._amount &&
      this.constructor.name === object.constructor.name
    );
  }
}

module.exports = Money;
