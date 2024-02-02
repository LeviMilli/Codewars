// 20. Valid Parentheses
// Solved
// Easy
// Topics
// Companies
// Hint
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
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    stack = []
    const bracketMapping = {')': '(', '}': '{', ']': '['};


    for (let char of s){
        if (char in bracketMapping){
            const topEle = stack.pop() || "nope"

            if (bracketMapping[char] != topEle){
                return false
            }
        } else {
            stack.push(char)
        }
        
    }
    return stack.length === 0
    
};


// becuase of the rules to this problem we can use a stack. each parentheses need to be closed in the correct order. 
// itterate over the string and check to see if its in our mappping. if it is we need to check it agaisnt our stack for the 
// correct closing backet. using stack.pop() we can easily grab and remove the last element and check it against our current char.
