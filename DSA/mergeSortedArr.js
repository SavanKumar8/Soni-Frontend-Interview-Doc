// Input: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
// Output: [1, 2, 2, 3, 5, 6];
nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

function merge(nums1, m, nums2, n) {
  console.log([...nums1, ...nums2].sort((a, b) => a - b).filter((i) => i != 0));
}

// merge(nums1, m, nums2, n); // here we ends up creating new array

function mergeSplice(nums1, m, nums2, n) {
  // more complexity
  nums1.splice(m, n, ...nums2);
  console.log(nums1.sort((a, b) => a - b));
}

//using merge sort approach
function mergeSort(nums1, m, nums2, n) {
  // set pointers
  let i = m - 1; // 3
  let j = n - 1; // 6
  let k = m + n - 1; // last position of nums1 where element will get placed

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  console.log(nums1);
}

mergeSort(nums1, m, nums2, n);
