# 58. Length of Last Word
# Easy
# 4.3K
# 222
# Companies
# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal 
# substring
#  consisting of non-space characters only.

 

# Example 1:

# Input: s = "Hello World"
# Output: 5
# Explanation: The last word is "World" with length 5.
# Example 2:

# Input: s = "   fly me   to   the moon  "
# Output: 4
# Explanation: The last word is "moon" with length 4.
# Example 3:

# Input: s = "luffy is still joyboy"
# Output: 6
# Explanation: The last word is "joyboy" with length 6.
 

# Constraints:

# 1 <= s.length <= 104
# s consists of only English letters and spaces ' '.
# There will be at least one word in s.

class Solution(object):
    def lengthOfLastWord(self, s):
        stripped = s.strip()
        splitter = stripped.split()
        return len(splitter[-1])
        

# for this problem we need to remove the extra whitespace and grab the last word. we can do that be using strip then using splitting
# our sentence into a list. we can then just grab the last element of the list by using [-1]