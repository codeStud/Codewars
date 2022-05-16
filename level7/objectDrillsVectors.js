// Create a Vector class with x and a y attributes that represent component magnitudes in the x and y directions.

// Your vectors should handle vector additon with an .add() method that takes a second vector as an argument and returns a new vector equal to the sum of the vector you call .add() on and the vector you pass in.

// My Solution
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(anotherVector) {
    return new Vector(this.x + anotherVector.x, this.y + anotherVector.y);
  }
}

// Other Solutions
class Vector {
  constructor(x, y) {
    Object.assign(this, { x, y });
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }
}
