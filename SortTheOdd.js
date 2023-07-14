// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let odd = array.filter((x) => x % 2 != 0)
    odd = odd.sort((a, b) => a - b)
    let answer = array.map((x) => x % 2 != 0 ? odd.shift() : x)
    return answer
  }

  // for this one we just needed to get our odd number array out of the array we were given. We did this using filter.
  // we can then use map to go over our array and replace each odd number by using shift() out of our odd array.