# 100. Same Tree
# Easy
# 10.8K
# 217
# Companies
# Given the roots of two binary trees p and q, write a function to check if they are the same or not.

# Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

# Example 1:


# Input: p = [1,2,3], q = [1,2,3]
# Output: true
# Example 2:


# Input: p = [1,2], q = [1,null,2]
# Output: false
# Example 3:


# Input: p = [1,2,1], q = [1,1,2]
# Output: false
 

# Constraints:

# The number of nodes in both trees is in the range [0, 100].
# -104 <= Node.val <= 104

class Solution(object):
    def isSameTree(self, p, q):
        
        if not q and not p:
            return True
        if not p or not q:
            return False
        if p.val == q.val:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        return False
        
# so again for checking trees we need to use a recursive loop. first set our initial checks on whether they both exist in the first place
# then as long as the values are the same we can run our recursion. if both come back true then we know they are the same.
# otherwise return false