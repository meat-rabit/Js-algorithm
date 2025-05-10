// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

var merge = function(intervals) {
    if(!intervals.length) return []
    // 1.排序
    intervals.sort((a,b)=>a[0]-b[0])
    // 2.合并
    const merged = [intervals[0]] // 把排序后 intervals 的第一个区间放入结果数组 merged 中，作为初始合并区间的起点
    for(let i=1; i<intervals.length; i++){
        const last = merged[merged.length-1]
        const current = intervals[i]
        if(current[0] <= last[1]){
            last[1] = Math.max(last[1], current[1])
        }else{
            merged.push(current)
        }
    }
    return merged
}
intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals)) // [[1,6],[8,10],[15,18]]           解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
