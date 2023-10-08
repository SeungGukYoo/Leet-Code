/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function solution(list1, list2) {
  const answer = new ListNode(0);
  let list = answer;
  let li1 = list1,
    li2 = list2;

  while (li1 !== null && li2 !== null) {
    if (li1.val >= li2.val) {
      list.next = li2.val;
      li2 = li2.next;
    } else if (li2.val > li1.val) {
      list.next = li1.val;
      li1 = li1.next;
    }
    list.next = new ListNode(list.next);
    list = list.next;
  }
  while (li1) {
    list.next = li1.val;
    li1 = li1.next;

    list.next = new ListNode(list.next);
    list = list.next;
  }
  while (li2) {
    list.next = li2.val;
    li2 = li2.next;

    list.next = new ListNode(list.next);
    list = list.next;
  }
  return answer.next;
}
