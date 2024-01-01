# 104. Maximum Depth of Binary Tree
# Easy
# 12.3K
# 204
# Companies
# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

# Example 1:


# Input: root = [3,9,20,null,null,15,7]
# Output: 3
# Example 2:

# Input: root = [1,null,2]
# Output: 2
 

# Constraints:

# The number of nodes in the tree is in the range [0, 104].
# -100 <= Node.val <= 100

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right



class Solution(object):
    def maxDepth(self, root):
        # Base case: if the root is None, the depth is 0
        if root is None:
            return 0
        
        # Recursively calculate the depth of the left and right subtrees
        left_depth = self.maxDepth(root.left)
        right_depth = self.maxDepth(root.right)
        
        # The maximum depth is the maximum of the depths of the left and right subtrees, plus 1 for the current node
        return max(left_depth, right_depth) + 1
    
# again for a binary tree we need to use recursion to get to the bottom. for this one we use if root is none return 0. 
# we then store our right and left brancehs in the left and rigth depth as we traverse, once we get to the bottom it will 
# start returning 0 then will move on to returning the max() of our left and right depths + 1. each time will increase 
# by one.