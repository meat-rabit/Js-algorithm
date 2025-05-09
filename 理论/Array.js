// javascript与数组

// 1.声明、创建、初始化数组
// 1.1 使用new()
const arr1 = new Array() 
const arr2 = new Array(4) 
const arr3 = new Array('a','b','c','d') 
console.log(arr1) // []
console.log(arr2) // [ <4 empty items> ]
console.log(arr3) // [ 'a', 'b', 'c', 'd' ]
// 1.2 直接也是最多使用的方式
let arr4 = [] 
let arr5 = ['e','f','g']
console.log(arr4) // []
console.log(arr5) // [ 'e', 'f', 'g' ]

// 2.对数组进行增删改查
// 2.1 在末尾添加元素
arr4.push(234,'3','d') 
console.log(arr4)
// 2.2 在开头添加元素
arr4.unshift(234,'3','d') 
console.log(arr4) // [ 234, '3', 'd', 234, '3', 'd' ]

// 2.3 在末尾删除元素
arr4.pop()
console.log(arr4)
// 2.4 在开头删除元素
arr4.shift()
console.log(arr4) // [ '3', 'd', 234, '3' ] 
// 2.5 在任意位置添加删除元素 splice()方法
arr4.splice(1,2) // 表示在索引1的位置，删除两个元素
console.log(arr4) // [ '3', '3' ]
arr4.splice(1,0,'1','d','o',5) // 第一个参数表示在索引1处，第二个表示是否删除：0是不删除，后面是添加的元素
console.log(arr4) // [ '3', '1', 'd', 'o', 5, '3' ]

// 多维数组
arr6 = [[1,2,3],['d','b','a']]
console.log(arr6) // [ [ 1, 2, 3 ], [ 'd', 'b', 'a' ] ]
console.table(arr6) // 这个更形象直观点
