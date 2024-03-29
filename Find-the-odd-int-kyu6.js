// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// FUNDAMENTALs



function findOdd(arr) {
    for(let i = 0; i < arr.length; i++){
      const count = arr.filter(function(value){
      return value ===arr[i]
      }).length;
      if(count % 2 == 1){
        return arr[i];
      }
    }
    return -1;
  }

  function findOdd(A) {
  
    let hash = {}
    
    for (let i = 0; i < A.length; i++){
      hash[A[i]] = (A[i] in hash ) ? hash[A[i]] + 1 : 1
    }
    
    for (let key in hash){
      if(hash[key] % 2 !== 0){
        return parseInt(key)
      }
    }
    
  }

  /// also solid