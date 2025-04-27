// 基本思想是将数组分成两部分，分别对这两部分进行排序，然后将排序后的两部分合并
//思路：不断地递归将数组分成两部分，然后将两部分合并
function mergeSort(arr){
    //划分数组
    // 递归终止条件 一定要有，不然一直递归陷入程序
    if (arr.length <= 1) {
        return arr
    }
    // 1.找到中间值
    const middle = Math.floor(arr.length / 2)

    // 2.分成左右两部分
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)

    // 3.递归左右两部分并合并数组
    return merge(mergeSort(left), mergeSort(right))
}

//合并数组
function merge(left, right){
    // 1.创立新数组用来接收左右两部分的值
    const newArr = []
    // 2.定义索引来指向左右两部分的值
    let leftIndex = 0
    let rightIndex = 0
    // 3.分别遍历左右数组，然后将小的值加入新数组，并且往后移动一位
    while(leftIndex<left.length && rightIndex<right.length){
        if (left[leftIndex]<right[rightIndex]){
            newArr.push(left[leftIndex])
            leftIndex++
        }else{
            newArr.push(right[rightIndex])
            rightIndex++
        }
    }
    // 4.退出循环后，数组的有些部分没有遍历到,将没有遍历到的部分直接加入新数组
    while(leftIndex<left.length){
        newArr.push(left[leftIndex])
        leftIndex++
    }
    while(rightIndex<right.length){
        newArr.push(right[rightIndex]) 
        rightIndex++
       }
    return newArr
}
arr = [4,6,6,7,2,6,7]

console.log(mergeSort(arr))
