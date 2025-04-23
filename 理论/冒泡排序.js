// 按从小到大的顺序排列:前面一个数字要比后面一个数字小
// 定义函数，传入数组arr
// 遍历数组，对需要转换位置的数字


function bubbleSort(arr) {
    const len = arr.length
    if (len <= 1) return
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

// 功能测试
console.time('算法运行时间')
const arr = [4, 3, 6, 2, 5, 7, 9, 8, 1]
bubbleSort(arr)
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.timeEnd('算法运行时间')
