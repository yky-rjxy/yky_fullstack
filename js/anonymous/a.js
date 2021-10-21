class Book {
    constructor(isbn, title, author){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    display() {
        return `
            ISBN号：${this.isbn}
            Title:${this.title}
            Author:${this.author}
        `
    }
}


const jsDontKnow = new Book ('111','aa','bbb');
console.log(jsDontKnow.hasOwnProperty('display')); // false
//找到原型对象
// Book.prototype.display = () => {}
// Book.prototype.sell = () => {}
// Book.prototype = {
//     display: () => {},
//     sell: () => {}
// }
console.log(jsDontKnow.__proto__ == Book.prototype) // true
console.log(jsDontKnow.constructor == Book) // true
// 火车头和车身之间
console.log(jsDontKnow.constructor == Book == Book.prototype.constructor);
// 基于原型的面向对象
// 封装、继承、多态
console.log(jsDontKnow.__proto__ == Book.prototype) // true
console.log(jsDontKnow.hasOwnProperty('title')) // true
console.log(jsDontKnow.hasOwnProperty('display')) // false
console.log(jsDontKnow.__proto__.__proto__.__proto__) // null
console.log(Book.prototype.isPrototypeOf(jsDontKnow))  // true
console.log("display" in jsDontKnow) // true