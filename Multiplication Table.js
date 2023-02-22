// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]
// ARRAYSFUNDAMENTALS

multiplicationTable = function(size) {
    let table = [];
    for (let i = 1; i <= size; i++) {
      let row = [];
      for (let j = 1; j <= size; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    return table;
  }

// so for each number up to the max number of size, we are going to need an array. each array is going to be the length of size as well. 
// this results in size x size of an array. first is just a normal for loop that we will use for each number from 1-size.
// for each of these we are goiong to have another for loop that multiplies the current i = by j to give us that nice multiplication table.
// each time we do this we strore it in row and push row to table then return table.
