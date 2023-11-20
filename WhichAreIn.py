# Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

# Example 1:
# a1 = ["arp", "live", "strong"]

# a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

# returns ["arp", "live", "strong"]

# Example 2:
# a1 = ["tarp", "mice", "bull"]

# a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

# returns []

# Notes:
# Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
# In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
# Beware: In some languages r must be without duplicates.

def in_array(array1, array2):
    answer = []
    for word2 in array1:
        for word in array2:
            if word2 in word and word2 not in answer:
                answer.append(word2)
    return sorted(answer)

# for this we need to use two for loops to itterate over each array and check if the words in the first array are in the 
# words in the second array. if it is we then check to see if the answer is in answer and return a sorted answer.


