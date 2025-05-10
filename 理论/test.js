const friends = [
{ name: 'John', age: 30 },
{ name: 'Ana', age: 20 },
{ name: 'Chris', age: 25 }, // ES2017 允许存在尾逗号
];
function comparePerson(a, b) {
if (a.age < b.age) {
return -1;
}
if (a.age > b.age) {
return 1;
}
return 0;
}
console.log(friends.sort(comparePerson));

let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

numbers = [1,3,4,6,7,7]
console.log(numbers);
console.log(numbers.toString());