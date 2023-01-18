// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger(n){
  
    const sortedDigits = n => ('' + n).split('').sort((a, b) => b - a)
    const max = +sortedDigits(n).join('')
    
    
    
    for (let i = n + 1; i <= max; i++) {
      if (max === +sortedDigits(i).join('')) return i
    }
    return -1
  }


  // so first we are going to split the n and sort. ("" + n) does the same as toString(). this is going to give us a max roll on the number provided. This will be incredibley useful in 
  // testing later. We set our max variable. Then we move to the for loop. our index is going to be counting up from our n until it reaches the next biggest number.
  // to do this we are going to use our sorted digits function on each index until max. When it gets to the next biggest number and rearranges the numbers to max and tests against out max... 
  // we will know that his is the next biggest number. return the i. otherwise return -1 as stated in the problem.