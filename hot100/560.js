// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

const subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0,1)
    let sum = 0
    let ans = 0
    for(let num of nums){
        sum += num
        if(map.has(sum-k)){
            ans += map.get(sum-k)
        }
        map.set(sum,(map.get(sum) || 0)+1)
    }
    return ans
}
nums = [1,1,1], k = 2
console.log(subarraySum(nums,k)) //2