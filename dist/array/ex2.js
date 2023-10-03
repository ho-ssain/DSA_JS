"use strict";
function findMedianSortedArraysBruteForce(nums1, nums2) {
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log(nums);
    const n = nums.length;
    if (n % 2 === 0) {
        const m1 = nums[n / 2 - 1];
        const m2 = nums[n / 2];
        return (m1 + m2) / 2;
    }
    else {
        return nums[Math.floor(n / 2)];
    }
}
const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 8, 9];
console.log(findMedianSortedArraysBruteForce(nums1, nums2));
