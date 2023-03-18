// 20. Valid Parentheses
// Easy
// 18.4K
// 1K
// Companies
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hash = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };
        let arr = [];
        for (let letter of s){
            if(hash[letter]){
                arr.push(letter)
            } else {
                let lastParenth = arr.pop()
                if(hash[lastParenth] !== letter){
                    return false
                }
            }
        } return arr.length === 0
};


/*
So this problems has two parts. first we need to create a hashmap that stores the parthenthese and their counterparts.
We will be using this a couple times to help us solve this problem. We need an array to store our iterations. 
we then us an of loop to get each item. if the item exists in the hash loop. we push it too our array.
if it doesnt we move on. then we pop off our last prentheses and check it with the current iteration in our of loop.
if it doesnt match, return false, if it does then on to the next iteration.
*/