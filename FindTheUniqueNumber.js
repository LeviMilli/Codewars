// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique



function findUniq(arr) {
    let hash = {}
    
    for (let i = 0; i < arr.length; i++){
      hash[arr[i]] = hash[arr[i]] + 1 || 1
    }
      console.log(hash)
      
      for (let key in hash) {
        if (hash[key] == 1) {
          return +key
        }
      }
      
    }

    

    function findUniq(arr) {
        arr.sort((a,b)=>a-b);
        return arr[0]==arr[1]?arr.pop():arr[0]
      }


      /*
      There are a few ways to do this. I like using a hashmap, who doesn't! so I just create a hashmap and check for the value 
      that is 1 and return that. ez pz.

      The other way to do this is by either sorting it or checking the frist and last index of a number. With the sort method, 
      we are checking to see if the first a second numbers are the same, if they are, we return the last number.  if they arent, we 
      know that the first number is the unique number and return that.

      another way to do it is by using the .find method or the .filter method. we would itterate through the array and return the
      first number that matches the requirements of arr.firstIndex() == arr.lastIndex(). 
      
      */