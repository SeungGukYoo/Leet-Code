/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let idx1 = 0,
    idx2 = 0;
  let sortArr = [];

  while (idx1 < nums1.length && idx2 < nums2.length) {
    if (nums1[idx1] >= nums2[idx2]) {
      sortArr.push(nums2[idx2++]);
    } else {
      sortArr.push(nums1[idx1++]);
    }
  }
  while (idx1 < nums1.length) {
    sortArr.push(nums1[idx1++]);
  }
  while (idx2 < nums2.length) {
    sortArr.push(nums2[idx2++]);
  }

  if (sortArr.length % 2 === 0) {
    let mid1 = Math.floor(sortArr.length / 2) - 1;
    let mid2 = Math.floor(sortArr.length / 2);
    return (sortArr[mid1] + sortArr[mid2]) / 2;
  } else {
    return sortArr[Math.floor(sortArr.length / 2)];
  }
};

findMedianSortedArrays([1, 3], [2]);
