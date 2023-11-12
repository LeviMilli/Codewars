# Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

# Examples input/output:

# XO("ooxx") => true
# XO("xooxx") => false
# XO("ooxXm") => true
# XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
# XO("zzoo") => false

def xo(s):
    checkX = 0
    checkY = 0
    for letter in s:
        lowercase_letter = letter.lower()
        if lowercase_letter == "o":
            checkX += 1
        if lowercase_letter == "x":
            checkY += 1
    return checkX == checkY


def xo(s):
    s = s.lower()
    return s.count('x') == s.count('o')

# so the long way to do this would be to use a for loop and check each letter increasing the number for each x and o found.
# the much quicker way to do it would be to use the count method in pyton and return whether they equal.