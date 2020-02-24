/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // iteratively 
    // let prev = null
    // let curr = head
    // while(curr){
    //     let next = curr.next
    //     curr.next = prev
    //     prev = curr
    //     curr = next
    // }
    // return prev

    // recursively
    if(!head || !head.next) return head
    let p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p
};