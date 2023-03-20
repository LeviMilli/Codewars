// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let lower = str.toLowerCase()
    
    let hash = {
      "x" : 0,
      "o" : 0
     }
     for (let letter of lower){
         hash[letter] = hash[letter] + 1  ||  0
       }
   
    if (hash["x"] == hash["o"]){
      return  true
    } else {
      return false
    }
    
      //code here
  }

  //Clever
  const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }


  /*
  So for this we need to count the number of x's and o's however you might do that. I used a hashmap that set the values,
  then checked to make sure that the value of x and o were the same. The second way is much easier to read in my opinion.
  You can create an array then use filter to return two different arrays and check the length of the two and make sure they
  are the same length. 
  */

