// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。

var maxSubArray = function(nums) {
        let currentSum = nums[0]
        let maxSum = nums[0]

        for (let i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i])
            maxSum = Math.max(maxSum, currentSum)
        }

        return maxSum
}

nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums)); // 6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 