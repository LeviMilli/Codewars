
// Code
// Test Result
// Testcase
// Testcase
// 383. Ransom Note
// Solved
// Easy
// Topics
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
// Seen this question in a real interview before?
// 1/4


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for ( const char of magazine){
        ransomNote = ransomNote.replace(char, "")
    } 
    return !ransomNote

};


// for this one we are going through our mmagazine and replacing all the letters in our ransomnote with "". if the char
// doesn't exist then we wont replace anything. itterating through our magazine we know that if we have the amount of letters we need,
// then by the time we get to the end, our ransomnote will be blank and we can return !ransomNote.