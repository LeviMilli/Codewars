// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
  public static string SpinWords(string sentence)
  {
  string[] words = sentence.Split(" ");
  for (int i = 0; i < words.Length; i++){
    if (words[i].Length >= 5){
      char[] flip = words[i].ToCharArray();
      Array.Reverse(flip);
      words[i] = new String(flip);
    }
  };
  
  return String.Join(" ", words);
  }
}





/*
so this is similar to how javacsript works but different. lol. First we need to split the word so we can mutate it later. 
to do this we to decalre that its going to be a [] of stirngs so we declare the string[] words and use split on.
to use Split we just enter the " " and we have an array of the words. we itterate over the array with a for loop and if the Length is 
greater than or equal 5, we split the word again so we can reverse it. we do this by using the char[] type and the ToCharArray.
afterwards we use the system Reverse from Array and set the new spot of word[i] to our flipped word. 
then we return the the String.Join(" ", words) the argument is where to join, the second is what to use the Join method on.
*/