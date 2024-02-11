// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
    if (!ending){
      return true
    }
    return ending == str.slice(-ending.length)
  }


  // we check for ending and it ending we use slice to grab the last letters and check against our ending