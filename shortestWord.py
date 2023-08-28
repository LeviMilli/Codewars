# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.

def find_short(s):
    splitty = s.split()
    answer = splitty[0]
    for word in splitty:
        if len(word) < len(answer):
            answer = word
    return len(answer)

    
# for this one we need to split the word and set our answer to he first word. then
# we can itterate over the list and replace the answe with one that is shorter. then we
# return the length of the answe.