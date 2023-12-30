# 83. Remove Duplicates from Sorted List
# Easy
# 8.3K
# 284
# Companies
# Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

# Example 1:


# Input: head = [1,1,2]
# Output: [1,2]
# Example 2:


# Input: head = [1,1,2,3,3]
# Output: [1,2,3]
 

# Constraints:

# The number of nodes in the list is in the range [0, 300].
# -100 <= Node.val <= 100
# The list is guaranteed to be sorted in ascending order.


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution(object):
    def deleteDuplicates(self, head):
        
        current = head
        while current and current.next:
            if current.val == current.next.val:
                current.next = current.next.next
                
            else:
                current = current.next
        return head

  
# for this problem we just need to traverse down our linked list and check to see if the values are the same as the next. if they are
# we set the next to next.next. pretty straightforward problem in the end.