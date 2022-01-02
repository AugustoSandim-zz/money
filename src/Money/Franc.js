class Franc {
  #amount; // private instance variable

  constructor(amount) {
    this.#amount = amount;
  }

  times(multiplier) {
    return new Franc(this.#amount * multiplier);
  }

  equals(object) {
    return object instanceof Franc && this.#amount === object.#amount;
  }
}

module.exports = Franc;
