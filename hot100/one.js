// 两数之和
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 ”和为目标值 target” 的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。 你可以按任意顺序返回答案。

// 分析：参数nums和target,返回值数组.  自己用的暴力枚举的方法
function twoSum(nums, target){
    let pivotIndex = 0
    let findIndex = 0
    let pivot = 0
    for(let i=0; i<nums.length;i++){
        pivot = nums[i]
        let number = target - pivot
        pivotIndex = i
        for(let j=i+1; j<nums.length; j++){
            if(number === nums[j]){
                findIndex = j
                return [pivotIndex, findIndex]
            }
        }

    }

}
// 示例
nums = [2,7,11,15], target = 9
// 输出：[0,1]
newnums = twoSum(nums,target)
console.log(newnums)




//这是利用哈希来写的，题解里面找的
const twoSumNew = (nums, target) => {
    const prevNums = {};                    // 存储出现过的数字，和对应的索引               
  
    for (let i = 0; i < nums.length; i++) {       // 遍历元素   
      const curNum = nums[i];                     // 当前元素   
      const targetNum = target - curNum;          // 满足要求的目标元素   
      const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
      if (targetNumIndex !== undefined) {         // 如果存在，直接返回 [目标元素的索引,当前索引]
        return [targetNumIndex, i];
      } else {                                    // 如果不存在，说明之前没出现过目标元素
        prevNums[curNum] = i;                     // 存入当前的元素和对应的索引
      }
    }
  }
  // 示例
nums = [2,7,11,15], target = 9
// 输出：[0,1]
newnums = twoSumNew(nums,target)
console.log(newnums)