// 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 输入参数nums，输出长度len
const longestConsecutive = (nums)=>{
    if(nums.length === 0){
        return 0
    }
   // 1. 对数组进行排序
   nums.sort((a, b) => a - b)

   // 2. 去重
   const uniqueNums = []
   for (let i = 0; i < nums.length; i++) {
       if (i === 0 || nums[i] !== nums[i - 1]) {
           uniqueNums.push(nums[i]) // 去除重复数字
       }
   }

   // 3. 找出最长连续序列
   let maxLength = 1 // 最长连续序列长度
   let currentLength = 1 // 当前连续序列长度

   for (let i = 1; i < uniqueNums.length; i++) {
       if (uniqueNums[i] - uniqueNums[i - 1] === 1) {
           // 如果当前数字与前一个数字连续
           currentLength += 1 // 当前连续序列长度加 1
       } else {
           // 如果不连续，更新最长连续序列长度，并重置当前长度
           maxLength = Math.max(maxLength, currentLength)
           currentLength = 1 // 重置当前连续序列长度
       }
   }

   // 最后一次更新最长连续序列长度
   maxLength = Math.max(maxLength, currentLength)

   // 4. 返回最长连续序列的长度
   return maxLength
}


// 例子
nums = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums))



// 官解
const longestConsecutive1 = (nums) => {
    // 使用哈希集合去重
    const numSet = new Set(nums) // 哈希集合，去重 + O(1) 查询
    let maxLength = 0

    for (const num of numSet) {
        // 检查是否是序列的起点
        if (!numSet.has(num - 1)) { //判断 num 是否是序列起点：如果 num - 1 不在集合中，说明 num 是一个新的连续序列的开始
            let currentLength = 1 // 当前序列长度初始化为1
            let currentNum = num

            // 向后扩展序列
            while (numSet.has(currentNum + 1)) { //连续的定义（数值差为1）是通过 currentNum + 1 来实现的 has()是set的内置函数
                currentNum += 1
                currentLength += 1
            }

            // 更新最大长度
            maxLength = Math.max(maxLength, currentLength)
        }
    }

    return maxLength
}
nums = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive1(nums))
