/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeList = (el1, el2) => {
  const List = new ListNode(0);

  let copyList = List;

  while (el1 && el2) {
    if (el1.val < el2.val) {
      copyList.next = el1;
      el1 = el1.next;
    } else {
      copyList.next = el2;
      el2 = el2.next;
    }
    copyList = copyList.next;
  }

  if (el1) copyList.next = el1;
  if (el2) copyList.next = el2;
  return List.next;
};

function solution(lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let el1 = lists.shift();
    let el2 = lists.shift();

    const mergeEl = mergeList(el1, el2);
    lists.push(mergeEl);
  }
  return lists.pop();
}
