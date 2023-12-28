# 67. Add Binary
# Easy
# 9K
# 910
# Companies
# Given two binary strings a and b, return their sum as a binary string.

 

# Example 1:

# Input: a = "11", b = "1"
# Output: "100"
# Example 2:

# Input: a = "1010", b = "1011"
# Output: "10101"
 

# Constraints:

# 1 <= a.length, b.length <= 104
# a and b consist only of '0' or '1' characters.
# Each string does not contain leading zeros except for the zero itself.



class Solution(object):
    def addBinary(self, a, b):
        return bin(int(a, 2) + int(b, 2))[2:]
        
        

# for this challenge we change the binary to integers using int(x, 2). add them together and convert back to binary using bin()
# this returns a ob"x" so we'll need to slice off the part we need for the answer with [2:]