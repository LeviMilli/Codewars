
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1



var uniqueInOrder=function(iterable){
  
    let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
    
    let answer = []
    for (let i = 0; i < strArr.length; i++){
      if (strArr[i] !== strArr[i+1] || strArr[i] == undefined){
        answer.push(strArr[i])
      }
    } return answer

  }