// 字母异位词分组:给你一个字符串数组，请你将 "字母异位词" 组合在一起。可以按任意顺序返回结果列表。
// "字母异位词" 是由重新排列源单词的所有字母得到的一个新单词。
// 示例
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

// 分析：输入参数strs,返回数组

// 判断两个字符串是否是字母异位词
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const count = {};
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    return true;
}


const groupAnagrams = (strs)=>{
    // 1.创建新数组来接收小数组
    const newArr = []
    // 2.遍历strs,将小数组添加进大数组
    for(let i=0; i<strs.length; i++){
        const littleArr = [strs[i]]
        // 3.向小数组里添加字母异位词
        for(let j=i+1;j<strs.length; j++){
            if(isAnagram(strs[i], strs[j])){
                littleArr.push(strs[j])
                strs.splice(j,1)
                        }
        }
        // 4.添加进大数组
        newArr.push(littleArr)
    }
    return newArr
    
}



// 官方解答
var groupAnagramsNew = function(strs) {
    const anagramGroups = new Map();

    for (let str of strs) {
        // 创建一个长度为 26 的数组，用于统计每个字符的出现次数
        const count = new Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // 将计数数组转换为字符串作为键（因为数组不能直接作为 Map 的键）
        const key = count.join(',');

        // 如果键不存在，则初始化一个空数组
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, []);
        }

        // 将当前字符串加入对应的组
        anagramGroups.get(key).push(str);
    }

    // 返回所有分组的值
    return Array.from(anagramGroups.values());
    
}

// 测试证明不能用于空字符串这些
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))