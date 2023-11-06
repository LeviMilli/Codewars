# Find the missing letter
# Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

# You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
# The array will always contain letters in only one case.

# Example:

# ['a','b','c','d','f'] -> 'e'
# ['O','Q','R','S'] -> 'P'
# (Use the English alphabet with 26 letters!)

# Have fun coding it and please don't forget to vote and rank this kata! :-)

# I have also created other katas. Take a look if you enjoyed this kata!

def find_missing_letter(chars):
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    first_index = alphabet.index(chars[0])
    index = 0
        
    while index < len(chars):
        if alphabet[first_index] != chars[index]:
            return alphabet[first_index]
        index += 1
        first_index += 1
        
    
    
# for this we needed to get the correct index from our alphabet to start with then we can just check our chars array with our 
# alphabet array starting from our starting index that we grabbed using the index of the chars[0]
#using a while loop we can then just itterate until we find the missing letter and return it
