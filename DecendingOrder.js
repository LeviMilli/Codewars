// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){

    let num = n.toString().split("").sort((a, b) => b - a).join("")
    
    return +num
    
    //...
  }


  /* 
  So in this problem we want to do a few things. We can't manipulate the number without turning it into a string.
  We do that with n.toString(). this can also be done with String(n). then we split, sort it by decending and join it back.
  This will return the string of the numbers in decending order. We want to return a number tho. Placing the + at the beginning
  of the varible turns a string into a number if its possible. Could also wrap the whole thing in ParseInt()
  */
