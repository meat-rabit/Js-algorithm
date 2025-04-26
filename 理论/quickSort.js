// 基本思想是通过一个“基准值”将数组分为两部分，一部分小于基准值，另一部分大于基准值，然后递归地对这两部分进行排序

function quickSort(arr) {
    if (arr.length<1) return arr
    let pivotIndex = arr[0] // 选择第一个元素作为基准值
    let left = [] // 小于基准值的元素
    let right = [] // 大于基准值的元素
    for (let i=1; i<arr.length; i++){
        if (arr[i]<pivotIndex){ // 如果当前元素小于基准值，则将其放入左侧数组
            left.push(arr[i])   
        }
        else{ // 如果当前元素大于基准值，则将其放入右侧数组
            right.push(arr[i])
        }
    }
    // 递归地对左侧和右侧数组进行排序，并将结果与基准值拼接在一起
    return  [...quickSort(left),pivotIndex,...quickSort(right)]
}

arr = [3, 6, 8, 10, 1, 2, 1]
console.log(quickSort(arr)) // [1, 1, 2, 3, 6, 8, 10]
