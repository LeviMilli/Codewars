# 94. Binary Tree Inorder Traversal
# Easy
# 13K
# 723
# Companies
# Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

# Example 1:


# Input: root = [1,null,2,3]
# Output: [1,3,2]
# Example 2:

# Input: root = []
# Output: []
# Example 3:

# Input: root = [1]
# Output: [1]

class Solution(object):

    def inorderTraversal(self, root):
        result = []

        def inorder(node):
            if node:
                # Traverse the left subtree
                inorder(node.left)
                # Visit the root
                result.append(node.val)
                # Traverse the right subtree
                inorder(node.right)

        inorder(root)
        return result
    
# for this problem we continue down the left side of our tree by calling inorder on our left side until we have no more then appeneding 
# the result we the inorder(node.left) finally returns nothing. keep in mind that this is a tree with potentially 20 branches. So
# we need a way to recursivly call the root and contintue down the tree to give us the farthest most left value