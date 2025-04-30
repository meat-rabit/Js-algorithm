// 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 输入参数数组nums，返回数组nums
const moveZeroes = function(nums) {
    let nonZeroIndex = 0 // 指向非零元素应该放置的位置

    // 遍历数组，将非零元素移动到前面
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i]
            nonZeroIndex++
        }
    }

    // 从 nonZeroIndex 开始到数组末尾的位置填充为零
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
    
}
nums = [0,1,0,3,12]
console.log(moveZeroes(nums))  // [1,3,12,0,0]