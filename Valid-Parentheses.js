// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// ALGORITHMS


//Mine 

function validParentheses(parens) {
    let count = 0;
    
    parens.split("");
       for (let i = 0; i < parens.length; i++){
         if(parens[i] === `(`) {
           count += 1
         } else if (parens[i] === `)`){
           count -= 1
         } if (count == -1) {
           return false
         }
    }
    if (count == 0){
      return true
    } else {
      return false
    }
   
  }


  //Clever

  function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }


  