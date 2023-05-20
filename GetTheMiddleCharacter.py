# DESCRIPTION:
# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

# #Examples:

# Kata.getMiddle("test") should return "es"

# Kata.getMiddle("testing") should return "t"

# Kata.getMiddle("middle") should return "dd"

# Kata.getMiddle("A") should return "A"
# #Input

# A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

# #Output

# The middle character(s) of the word represented as a string.


def get_middle(s):
    index, odd = divmod(len(s), 2)
    return s[index] if odd else s[index - 1:index + 1]




def get_middle(word):
  length = len(word)
  if length % 2 == 1:
    return word[length // 2]
  else:
    return word[length // 2 - 1:length // 2 + 1]


# so we use divmod here to give us the quotient and the remainder. on odd lengths this will give us the correct index and we 
# can just use it and go. on even lengths. we will need to use slice notation to get the index - 1 and the index position right after it
# slice notation just shows when to stop so using index + 1 instead of just index for the end part of our notation works.

