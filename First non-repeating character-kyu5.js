// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// STRINGSALGORITHMS


function firstNonRepeatingLetter(s) {
    var start = s.toLowerCase();
    for (var i=0; i < start.length; i++)
      if(start.indexOf(start[i]) === start.lastIndexOf(t[i]))
        return s[i];
    return "";
  }


// for this we are using two array methods in conjuction to make this problem relatively simple. we are checking to see if the index of a letter is the also the last index of that 
// letter. If that is true then we return that letter, otherwise we return ""