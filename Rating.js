const MIN_RATING = 1;
const MAX_RATING = 5;

export default class Rating {
  #value;
  constructor() {
    this.#value = null;
  }

  set value(value) {
    if (value < MIN_RATING || value > MAX_RATING) {
      console.error(
        `Rating: ${value}\nRating must be between ${MIN_RATING} and ${MAX_RATING}`
      );
    }
    this.#value = value;
  }
  get value() {
    return this.#value;
  }
}
