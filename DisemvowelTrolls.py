# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.


def disemvowel(string_):
    vowel = "aeiouAEIOU"
    return "".join(char for char in string_ if char not in vowel)
    
    
# we need our list of vowels to check against our string thats being passed through so we create our vowels variable. 
# we then can use a simple return and itterate through all the characters in our string joining them together if they are not in our vowels.
# we could also just use "aeiou" inside of our check and use a lowercase version of each letter to check similar to this:
def disemvowel(string_):
    return "".join(char for char in string_ if char.lower() not in "aeiou")
