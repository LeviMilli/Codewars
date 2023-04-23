/*
Bubble sort algorithm. this works but running through an array and sorting based on whether an element is smaller or larger than the 
previous element. It's generally not used becuase of its time complexity of O(n^2). this is beacuse of the nested for loop action.
*/

let arr = [3, 4, 5, 3, 9, 10]

function bblSort(arr){
  for(let i = 0; i < arr.length; i++){
    // Last i elements are already in place
    for(let j = 0; j < ( arr.length - i -1 ); j++){
      // Checking if the item at the present iteration
      // is greater than the next iteration
      if(arr[ j ] > arr[ j +1 ]){
        // If the condition is true then swap them
        let temp = arr[ j ]
        arr[ j ] = arr[ j + 1]
        arr[ j+1] = temp
      }
    }
  }
}

