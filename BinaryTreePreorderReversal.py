# 144. Binary Tree Preorder Traversal
# Solved
# Easy
# Topics
# Companies
# Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

# Example 1:


# Input: root = [1,null,2,3]
# Output: [1,2,3]
# Example 2:

# Input: root = []
# Output: []
# Example 3:

# Input: root = [1]
# Output: [1]
 

# Constraints:

# The number of nodes in the tree is in the range [0, 100].
# -100 <= Node.val <= 100
 

# Follow up: Recursive solution is trivial, could you do it iteratively?

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def preorderTraversal(self, root):
        result = []
        stack = []

        while root or stack:
            while root:
                result.append(root.val)
                stack.append(root)
                root = root.left
            
            root = stack.pop()
            root = root.right
        
        return result

# for this one we need to have a stack and result array. then we can continue through the our problem using those.
# isntead of using recursion here we can just use double while loops. we want to run our run if we have a root or stack.
# so what we are doing is traversing down the left side of our node until we run out of left while adding the val to our results.
# when we run out of left we then grab from our stack. this will keep checking our left first then our right and adding when we have values.
# when we finally run out of right or left, our root = root.right will be none and our while loop will be done. we can then return our
# result and it will be each val traversing down our tree and left to right in order.