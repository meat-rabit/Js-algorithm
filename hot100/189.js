// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

 

var rotate = function(nums, k) {
    const newArr = nums.splice(-k)
    
    
    for(let i=newArr.length-1; i>=0; i--){
        nums.unshift(newArr[i])
    }
    return nums
};
// 示例 1:

nums = [1,2,3,4,5,6,7], k = 3
   
// nums = [5,6,7,1,2,3,4]
console.log(rotate(nums, k));



// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]