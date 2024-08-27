// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



function positiveSum(arr) {
    console.log(arr)
    let answer = 0
    for (let i = 0; i < arr.length; i++){
      if(arr[i] > -1){
        answer += arr[i]
      }
    }
    return answer
}


// for this problem we use a simple for loop and add all numbers together if they are above 0. then return answer