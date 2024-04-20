// 205. Isomorphic Strings
// Easy
// Topics
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length){
        return false
    }

    let charMap = {}
    let usedChars = new Set()

    for (let i = 0; i < s.length; i++){
        if (charMap[s[i]]){
            if (charMap[s[i]] != t[i]){
                return false
            }
        } else{
            if (usedChars.has(t[i])) {
                return false
            }
            charMap[s[i]] = t[i]
            usedChars.add(t[i])
        }
        
    }
    return true
};


// for this we need to use a hashmap and a set. we use a set because its more efficient than using an array because we can use .has()
// on our set. we check our letters agaisnt the hashmap for the same position or if a character has been been used before and return 
// the correct result

