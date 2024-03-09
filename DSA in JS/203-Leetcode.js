/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head==null) return head
   
    if(head.val==val){
        while(head.val==val&&head.next){
            head=head.next
        
        }
        if(head.next==null && head.val==val){
            head=head.next
        }
        
    }
     let current=head;
    while(current && current.next){
       while(current && current.next){
            if(current.next.val ==val){
            current.next = current.next.next;
            current=current.next
        }else{
            current=current.next
        }
       }
    }
    return head
};