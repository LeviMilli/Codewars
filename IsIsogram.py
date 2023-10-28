# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)

# "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

# isIsogram "Dermatoglyphics" = true
# isIsogram "moose" = false
# isIsogram "aba" = false

def is_isogram(string):
    lower = string.lower()
    unique_letters = set()
    
    for letter in lower:
        if letter in unique_letters:
            return False
        unique_letters.add(letter)
    
    return True

def is_isogram(string):
    return len(string) == len(set(string))

    
    
# for this need to create a set either way. we can use a loop to check each letter after we create our set of string or 
# we can simply check the length of our set agaisnt the length of the string and return the == of that