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

let jsDontKnow = new Book ('111','aa','bb');
const attrs = [...Object.getOwnPropertyNames(jsDontKnow), ...Object.getOwnPropertyNames(Book.prototype)];
console.log(attrs);