//将字符串所有转为大写
const arr1 = ['a', 'b', 'c'];
const arr2 = arr1.map((x) => x.toUpperCase());


const arr3 = [
    { name: 'a', age: 1 }, { name: 'b', age: 2 }, { name: 'c', age: 3 },
    { name: 'd', age: 4 }, { name: 'e', age: 5 }, { name: 'f', age: 6 }
];
//将数组中大于3的对象输出
const arr4 = arr3.filter((x) => x.age > 3);
