function zero(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(0) : 0;
}
function one(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(1) : 1;
}
function two(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(2) : 2;
}
function three(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(3) : 3;
}
function four(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(4) : 4;
}
function five(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(5) : 5;
}
function six(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(6) : 6;
}
function seven(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(7) : 7;
}
function eight(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(8) : 8;
}
function nine(func) {
  // calling func(op1), OR directly returning the op2
  return func ? func(9) : 9;
}

// using the twice(5); -> 10 closure concept I learnt
function plus(op2) {
  // using closure in JS
  return (op1) => op1 + op2;
}
function minus(op2) {
  // using closure in JS
  return (op1) => op1 - op2;
}
function times(op2) {
  // using closure in JS
  return (op1) => op1 * op2;
}
function dividedBy(op2) {
  // using closure in JS
  return (op1) => Math.floor(op1 / op2);
}
