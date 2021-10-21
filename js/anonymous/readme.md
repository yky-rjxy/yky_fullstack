# JS 的灵魂在函数，函数的灵魂在匿名函数

- 匿名函数
    ```JS
        () => {}
        function () {}
        跟立即执行结合起来
        (function() {

        })()
    ```

- 作为图书管理系统，写个图书入库类
    JS 面向对象 class 关键字来的比较晚，用function 来构造类
    JS 类 有点像火车，有火车头，车身
    ``` Javascript
    //单独构造函数就可以成为一个类
    function Book(isbn, title, author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    ```

- 构造函数与普通函数的区别
    构造函数孩多多 （生产实例） constructor？
    this....
    this...
    一步步来 构造过程   女娲捏人。
    1. 构造函数函数名首字母大写
    2. 运行的方式 ()()  new fn()
    new 的时候会把构造函数执行一下，并且 this 指向当前对象
    3. this指向实例
    4. 落到对象上， 原型对象都是Object
    5. Object是顶层对象，也是函数 ，可new Object() {}
    6. 任何一个函数都有一个prototype属性  火车身
    7. 任何一个对象实例都一定有一个__proto__私有属性
        指向原型对象，基于原型的
        js_dontKnow.display();基于原型继承父类方法
    8. 原型链
        Book.prototype.isPrototypeOf(js_dontKnow)==true
    9. JS class 关键字只是语法糖，不是血缘关系
