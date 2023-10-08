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

function mergeList(left, right) {
  if (!left) return right;
  else if (!right) return left;
  else if (left.val < right.val) {
    left.next = mergeList(left.next, right);

    return left;
  } else {
    right.next = mergeList(left, right.next);

    return right;
  }
}

function helper(list, start, end) {
  if (start < end) {
    const mid = parseInt((start + end) / 2);
    const left = helper(list, start, mid);
    const right = helper(list, mid + 1, end);
    console.log(left, right);
    const result = mergeList(left, right);
    return result;
  } else if (start === end) {
    return list[start];
  } else return null;
}

function solution(lists) {
  return helper(lists, 0, lists.length - 1);
}
