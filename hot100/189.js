// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。


// 这是自己的思路，但是存在不足，用例并未完全通过
var rotate1 = function(nums, k) {
    const newArr = nums.splice(-k)
    for(let i=newArr.length-1; i>=0; i--){
        nums.unshift(newArr[i])
    }
    return nums
};


// 示范函数
const rotate = function (nums, k) {
  k %= nums.length; // 防止 k > nums.length

  reverse(nums, 0, nums.length - 1);       // 整体翻转
  reverse(nums, 0, k - 1);                 // 前 k 个翻转
  reverse(nums, k, nums.length - 1);       // 后 n-k 个翻转
  return nums
}


const  reverse = function(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}


nums = [1,2,3,4,5,6,7,9], k = 3
console.log(rotate(nums, k)) // nums = [5,6,7,1,2,3,4]

num = [1,2,3,4,5,6]
console.log(num.reverse());
console.log(num.reverse(0,4));
