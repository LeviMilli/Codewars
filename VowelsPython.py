# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.


def get_count(sentence):
    number = 0
    vowels = "aeiou"
    
    for letter in sentence:
        if letter in vowels:
            number += 1
            
    return number
    

# we set number and our vowels to check for. then we do a for in loop for sentence. if letter is in vowels we +1 to number and return number
