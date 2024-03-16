/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let temp = head;
  let length = 0;
  let count = 0;
  while (temp) {
    length++;
    temp = temp.next;
  }
  let starting = Math.floor(length / 2);
  while (count != starting) {
    head = head.next;
    count++;
  }
  return head;
};
