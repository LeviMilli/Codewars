// 171. Excel Sheet Column Number
// Attempted
// Easy
// Topics
// Companies
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {

    let alpha ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let answer = 0

    for (let i = 0; i < columnTitle.length; i++){
        answer *= 26; // Multiply by 26 to shift digits left
        answer += alpha.indexOf(columnTitle[i]) + 1;
    }
    return answer

};



// for this initialize 0 as the answer. if its the first or only column title index then it will stay 0 and we will add the index
// and it will be our answer. after that we can add columns which depending on the letter will be that many 26 character columns.
// this will add each letters columns and start to stack multiplicitivly on itself. the last index will only add the number it is 
// to the total and this will be our answer.