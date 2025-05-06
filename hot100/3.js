// 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。

const lengthOfLongestSubstring = (s) =>{
    // 输入参数字符串，输出数字
    const charSet = new Set() // 用于存储当前窗口中的字符
    let left = 0 // 窗口的左边界
    let maxLength = 0 // 最长子串的长度

    for (let right = 0; right < s.length; right++) {
        // 如果当前字符已经在窗口中，移动左边界直到没有重复字符
        while (charSet.has(s[right])) {
            charSet.delete(s[left])
            left++
        }

        // 将当前字符加入窗口
        charSet.add(s[right])
        // 更新最长子串的长度
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength

}

// 示例
s = "abcabcbb"
console.log(lengthOfLongestSubstring(s)) // 3 

