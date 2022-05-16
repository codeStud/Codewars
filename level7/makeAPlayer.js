// My Solution
function Player(name, position, age, dribbling, pass, shoot) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.dribbling = dribbling;
  this.pass = pass;
  this.shoot = shoot;
}

// Other Solutions
class Player {
  constructor(name, pos, age, dribble, pass, shoot) {
    Object.assign(this, {
      name: name,
      position: pos,
      age: age,
      dribbling: dribble,
      pass: pass,
      shoot: shoot,
    });
  }
}
