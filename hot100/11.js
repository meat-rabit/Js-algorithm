// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。


const maxArea = (height)=>{
    // 输入参数为高度的数组，输出为数字
    // 1.定义前后指针和总储水变量
    let left = 0
    let right = height.length -1 
    let count = 0
    // 2.遍历数组，比较总count
    while(left < right){
        // 3.比较计算储水量的先决条件
        if(height[left] > height[right]){
            newcount = height[right] *(right - left)
            right--
        }else{
            newcount = height[left] *(right - left)
            left++
        }
        if(newcount > count){
            count = newcount
        }
    }
    return count
}

// 示例
height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))  // 49
