// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
    let hash = {}
    let lower = word.toLowerCase()
    for(let letter of lower){
      hash[letter] = hash[letter] + 1 || 1
    }
      let answer = []
    for (let letter of lower){
      if(hash[letter] < 2){
        answer.push("(")
      } else {
        answer.push(")")
      }
    }
    return answer.join("")
      // ...
  }

  function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

  /* 
  ok so my way was less efficient than the more clever way. so we are going to go over that instead. with the more cleaver way, 
  we are going to pretty much do the same thing. we are going to take the word and make it lowercase as specified by the problem.
  then we are going to split into an array and run a map function. a is the letter, i is the index, and w is the whole array.
  so we check the index of a in w with the last index. if its the same we return ( if its different we return ). simple as that.
  */

  
