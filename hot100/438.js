// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

var findAnagrams = function(s, p) {
    const result = [];
    const pLen = p.length;
    const sLen = s.length;

    // 如果 s 的长度小于 p 的长度，直接返回空数组
    if (sLen < pLen) return result;

    // 初始化频率数组
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    // 统计 p 的字符频率
    for (let i = 0; i < pLen; i++) {
        pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // 滑动窗口遍历 s
    for (let i = 0; i < sLen; i++) {
        // 将当前字符加入窗口
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;

        // 如果窗口大小超过 pLen，移除最左边的字符
        if (i >= pLen) {
            sCount[s.charCodeAt(i - pLen) - 'a'.charCodeAt(0)]--;
        }

        // 如果当前窗口的频率与 p 的频率一致，记录起始索引
        if (i >= pLen - 1 && arraysEqual(sCount, pCount)) {
            result.push(i - pLen + 1);
        }
    }

    return result;
};

// 辅助函数：比较两个数组是否相等
function arraysEqual(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
s = "cbaebabacd", p = "abc"
console.log(findAnagrams(s, p)) // [0,6]