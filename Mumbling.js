// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return s
      .split('')
      .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
      .join('-')
  }

  /*
  this problem uses the map method to be the most efficient. we return s.split then map the new array we created. we go s.toUpperCase()
  then + s.toLowerCase().repeat(i) number of times. if the index is 0 for the first index, there wont be a repeat on this one. 
  then we use join("-") to add the - to it like the problem calls for. ezpz

  */

