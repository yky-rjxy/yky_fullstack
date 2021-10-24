//这里有什么问题?
function Book(isbn, title, author){
    this.setIsbn(isbn);
    // this.isbn = isbn; // public 属性
    // this.title = title;
    // this.author = author;
}

Book.prototype = {
    setIsbn(isbn) {
        // 会写些什么代码
        // isbn 不能是this 要可读
        // private 私有属性，对象的方法内this.调用，但是在外界不能访问
        // js 内不存在private，约定，以 _ 开头的 就是私有属性
        if(!this.checkIsbn(isbn)) 
            throw new Error('Isbn格式错误！')

        this._isbn = isbn;
    },
    getIsbn() {
        return this._isbn;
    },
    checkIsbn(isbn) {
        if(!isbn) return false
        return /\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn)
    }
}
// class 只是语法糖
// private
const jsDontKnow=new Book('978-7-121-29899-8','React全栈','杨康妍');
// console.log(jsDontKnow.isbn);
// jsDontKnow.isbn = 'ddddd';
// console.log(jsDontKnow.constructor);
// console.log(jsDontKnow.__proto__ == Book.prototype);
console.log(jsDontKnow instanceof Book);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));
console.log(jsDontKnow.getIsbn());
// jsDontKnow.isbn = 'dddd';