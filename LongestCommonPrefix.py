# 14. Longest Common Prefix
# Easy
# 16.4K
# 4.3K
# Companies
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

 

# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
 

# Constraints:

# 1 <= strs.length <= 200
# 0 <= strs[i].length <= 200
# strs[i] consists of only lowercase English letters.


class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return "" 

        for i, char in enumerate(strs[0]):
            for word in strs[1:]:
                if i >= len(word) or char != word[i]:
                    return strs[0][:i]
        return strs[0]


# first we return our blank asnwer "" if there is no strs. for the next part we are going to need an i index counter and a char
# to check directly against the upcoming words. we are using the first word in our strs list, so we just need to itterate over
# the rest of them of the words, we can accomplish this by using a slice notation on our next for loop.
# At this point in our code we are going to go until we either run out of letters or our current char is not equal to our 
# current letter from word in index. once we find either one of these, then we can return our first value from our list and we know
# that we can slice UP TO our current index and that will give us the answer we are looking for