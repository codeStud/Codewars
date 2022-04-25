// The code provided is supposed return a person's Full Name given their first and last names.
// The inputs can be empty as WEBGL_lose_context.

// My Solution
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    if (this.firstName && this.lastName) {
      return this.firstName + " " + this.lastName;
    } else if (this.firstName) {
      return this.firstName;
    } else if (this.lastName) {
      return this.lastName;
    } else {
      return "";
    }
  }
}

// Other Solutions
class Dinglemouse {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`.trim();
  }
}
