// 21. Merge Two Sorted Lists
// Easy
// 18K
// 1.7K
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1){
        return list2
    }
    if (!list2){
        return list1
    }

    let p1 = list1
    let p2 = list2
    let dummy = new ListNode()
    let tail = dummy

    while (p1 && p2){
        if (p1.val < p2.val){
            tail.next = p1
            p1 = p1.next
        } else {
            tail.next = p2
            p2 = p2.next
        }
        tail = tail.next
    }

    if (p1) {
        tail.next = p1
    } else {
        tail.next = p2
    }

    return dummy.next


    
};


/*
if only either of the lists exists, then we dont need to merge them so return the list that does exist. 
so to itterate over a list, we need to set our pointers for both our lists and our dummy node we are going to append the list to.
we create a while loop to check if both lists are still valid while we itterate through, if not we will catch it at the end no problem.
so first we just check the higher value and set it as our tail.next and continue set our list that we appended, one more through.
eventually it will get to the end and we will be left with one or more items in either of the lists which we catch at the end then return our
dummy list that points to the tail and this should be our merged list.
*/