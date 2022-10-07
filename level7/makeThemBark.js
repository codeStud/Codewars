// The dogbreeder says he wont pay you, until he can make every dog object .bark(). Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.

// You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().

// Can you solve this problem, or will you let this client outsmart you for good?

// Practical info:
// The .bark() method of a dog should return the string 'Woof!'.

// My Solution
Dog.prototype.bark = function () {
  return "Woof!";
};

// Other Solutions
Dog.prototype.bark = () => "Woof!";
