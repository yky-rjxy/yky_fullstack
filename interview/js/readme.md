# 把面试题当成高考题
  1. 以题目来检验下当前js之所学 推动之
     黄冈中学 出试卷
  2. 衡水一中
    清北方法论

    打卡 课后做的任何事情
    2. 能力增长点
    JS 能力

- null 和 undefined 的区别是什么？
    Object.prototype.__proto__ == null

    Undefined 意义是类型，当一个声明了一个变量未初始化时，得到的是undefined
    1. 箭头函数和普通函数不一样
        es5时代的arguments 是有用的
        箭头函数虽然便利，但被干掉了arguments
        ()=>{}  function ()  {}都可以省略 arguments   但箭头函数es6 里提供了...rest 运算符
        function(){}
    
    2. Object 的原型对象
        new Object()
        Object(函数).prototype
        父（原型）对象
        Object（函数）.prototype.__proto__
        为什么？到顶了，最高级，不应该有原型， null
        null 此处没有对象，不该有值
        跟禅宗一样， 充满着智慧


- 选择元素可以通过标签、id、选择器（）、类名、子元素（），
    任何元素都有这些方法，不仅限doucment
    console.log(document.getElementsByName('b2')[0].getElementsByTagName('p')[0]);
    