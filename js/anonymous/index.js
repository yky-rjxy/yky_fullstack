// 事件执行函数，叫什么名字无所谓
// addEventListener('click',() => {}); 

// 函数定义，不适合匿名函数的使用场景
// function(){

// }

// 驼峰式命名
const funcA = function() { //匿名函数
    let foo = 10;
    let bar = 2;
    console.log(foo * bar);
}
funcA();


//如何将驼峰去掉？
//立即执行函数
(function() { //匿名函数
    let foo = 10;
    let bar = 2;
    console.log(foo * bar);
})();


// foo,bar  值如何传过去
(function(foo, bar) { //匿名函数
    console.log(foo * bar);
})(20, 3);

// 如何交给外界？
let res = (function(foo, bar) { //匿名函数
   return foo * bar;
})(20, 3);
console.log(res);