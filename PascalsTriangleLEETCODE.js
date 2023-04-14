// 118. Pascal's Triangle
// Easy
// 9.7K
// 316
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30
// Accepted
// 1.2M
// Submissions
// 1.7M
// Acceptance Rate
// 70.8%


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let triangle = []
    
    for (let i = 0; i < numRows; i++){
      let row = []
    
      for (let j = 0; j <= i; j++){
        if (j === 0 || j === i){
          row.push(1)
        } else {
          row.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
        }
      }
      triangle.push(row)
    }
        return triangle
    
    };



    /*
    so this problem is pretty fun. first we need to establish a blank triangle that we are going to be pushin our rows to.
    then we are going to use a nested for loop to grab the values of the items inside of the triangle. if j is 0, then we are 
    going to just push 1 to our row, OR if j = i, we are goin go push 1. in both these cases, it means we are either at the beginning 
    of our length or the end of our length or our row. 
    
    next, if neither of these conditions are met, we are going to go to our triangle and grab the values we need to add together.
    we then add our values and push it to our row. 

    Since the answer wants each row as if it would show up in a triangle, we then push to the triangle. afterwards we return the triangle 
    and we are good to go.
    */




