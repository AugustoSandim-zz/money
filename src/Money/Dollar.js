class Dollar {
  #amount; // private instance variable

  constructor(amount) {
    this.#amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.#amount * multiplier);
  }

  equals(object) {
    return object instanceof Dollar && this.#amount === object.#amount;
  }
}

module.exports = Dollar;
