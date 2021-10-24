class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
Object.assign(Point.prototype, {
    toString() {},
    toValue() {}
})
const o = new Point(1,2);
console.log(Object.getOwnPropertyNames(o)) // [ 'x', 'y' ]
console.log(Object.getOwnPropertyNames(Point.prototype)); // [ 'constructor', 'toString', 'toValue' ]
console.log(Object.keys(Point.prototype)); // [ 'toString', 'toValue' ]
console.log([...Object.getOwnPropertyNames(o),...Object.keys(o.__proto__),...Object.keys(o.__proto__.__proto__)]); // [ 'x', 'y', 'toString', 'toValue' ]

const getAllProperties = (o) => {
    let arr = Object.getOwnPropertyNames(o);
    let p = o.__proto__;
    let res = [...arr];
    while(p) {
        const keys = Object.keys(p);
        for(let key of keys) {
            res.push(key);
        }
        console.log(p);
        p = p.__proto__;
    }
    //console.log(res);
    return res;
}
console.log(getAllProperties(o));