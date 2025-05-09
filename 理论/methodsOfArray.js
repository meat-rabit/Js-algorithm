// 1.数组合并concat() :数组会按照该方法传入的参数顺序连接指定数组
console.log('------------------concat()-----------------')
let arr1 = [1,[3,8,8],[3,2]]
let arr2 = ['a','fa','ghh','g']
arr3 = arr2.concat(arr1)
console.table(arr3)
console.log(arr3)


// 2.迭代器函数，下面提到的方法都是对数组进行迭代的
const isEven = x => x%2 === 0 
arr = [1,2,3,4,5,6,7,8,9,10]

// every()函数，对数组的值进行isEven判断，一旦出现false则返回，不再执行,也就是说，只有所有元素都符合条件才可以返回true
console.log('------------------every()-----------------')
console.log(arr.every(isEven)) // false
// 验证邮箱
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let emailAddresses = ["user1@example.com", "user2@example.com", "user3@example.com"]
let allValidEmails = emailAddresses.every(function(email) {
    return emailRegex.test(email)  // 利用every和正则表达式判断邮箱地址是否正确
})
console.log(allValidEmails) // 输出true

// some()函数，和 every 的行为相反，会迭代数组的每个元素，直到函数返回 true
console.log('------------------some()-----------------')
console.log(arr.some(isEven)) // true
// 数据预处理：如果商品价格有低于100的则返回true
let products = [{name: "product1", price: 50}, {name: "product2", price: 200}, {name: "product3", price: 80}];
let hasCheapProduct = products.some(function(product) {
    return product.price < 100
})
console.log(hasCheapProduct) // 输出true

// forEach()函数，对数组中值执行函数操作，但不会返回值，通常遍历数组元素
console.log('------------------forEach()-----------------')
arr.forEach(x => {
    console.log(x%2 === 0)
})

// map()函数;对数组中的每个元素执行一次提供的函数，并返回一个新数组，新数组的每个元素是原数组元素经过提供的函数处理后的结果
console.log('------------------map()-----------------')
let newArr1  = arr.map(isEven)
console.log(newArr1)  //[false, true,  false,  true,  false, true,  false, true,  false,  true]

// filter()函数:对数组中的每个元素执行一次提供的函数，并返回一个新数组，新数组包含所有使提供的函数返回true的元素。
console.log('------------------filter()-----------------')
let newArr2  = arr.filter(isEven)
console.log(newArr2) // [ 2, 4, 6, 8, 10 ]


// reduce()函数:用于将数组中的数据汇总为一个单一的结果，可以用于累加、统计、生成对象或数组等复杂操作
console.log('------------------reduce()-----------------')
let newArr3  = arr.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue; // return返回的值作为下一次迭代的accumulator值，currentValue为新的值
}, 0)  // 此处0表示初始值
console.log(newArr3) // [ 2, 4, 6, 8, 10 ]