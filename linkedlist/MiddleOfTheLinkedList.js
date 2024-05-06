/** 876:
 *  Given the head of a singly linked list, return the middle node of the linked list.
    If there are two middle nodes, return the second middle node.
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
    var middleNode = function(head) {
        let slow = head;
        let fast = head;
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        if(fast.next){
            return slow.next
        }
        return slow;
    };