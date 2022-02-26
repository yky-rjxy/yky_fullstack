const arr = [3,4,5];
// 给出在数组尾部/头部 加、删除的方法
arr.push(6);//面向对象的
console.log(arr.pop());
arr.unshift(1);
arr.shift(1);
//把数组打印出来,有多少种方法?
for (let num in arr){
    console.log(num);
}
//console.log(arr);
arr.forEach(item =>{
    console.log(item);
})
console.log(arr.join(" "));
console.log(arr.splice(0,arr.length)); //splice() 方法向/从数组添加/删除项目，并返回删除的项目。splice() 方法会改变原始数组。
console.log(arr.map(item =>item));