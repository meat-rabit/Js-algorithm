function selectionSort(arr) {
    // 获取数组的长度
    const n = arr.length;

    // 遍历数组的每个元素
    for (let i = 0; i < n - 1; i++) {
        // 假设当前索引 i 是最小值的索引
        let minIndex = i;

        // 在未排序的部分查找最小值的索引
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // 更新最小值的索引
            }
        }

        // 如果找到的最小值索引不是当前索引 i，则交换元素
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr; // 返回排序后的数组
}

// 测试代码
const array = [64, 25, 12, 22, 11];
console.log("排序前：", array);
const sortedArray = selectionSort(array);
console.log("排序后：", sortedArray);