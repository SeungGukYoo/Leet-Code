/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function solution(list1, list2) {
  let mergedHead = { val: -1, next: null },
    crt = mergedHead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      crt.next = list2;
      list2 = list2.next;
    } else {
      crt.next = list1;
      list1 = list1.next;
    }
    crt = crt.next;
  }
  crt.next = list1 || list2;
  return mergedHead.next;
}
