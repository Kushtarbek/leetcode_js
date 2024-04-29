/**
 
206. Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.
A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

//1. Iterative Approach
var reverseList = function(head) {
    let current = head;
    let prev = null; 

    while( current ){
        let temp = current.next
        current.next = prev;
        prev = current;
        current = temp;
    } 
    return prev;
};


//2. Recursively
var reverseList = function(head) {
    if (head == null){
        return null;
    }

    let newHead = head;
    if(head.next){
        newHead = reverseList(head.next);
        head.next.next = head;
    }
    head.next = null;
    return newHead;
};