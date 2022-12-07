// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



function repeatStr (n, s) {
    let string = "";
    while (n > 0){
      string += s;
      n--;
    }
    return string;
  }