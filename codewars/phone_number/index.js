// const createPhonenumber =(arr) =>"("+ arr[0] +arr[1] +arr[2] +")"+ arr[3] +arr[4]+arr[5]+ "-"+arr[6] +arr[7] +arr[8]+arr[9]
// createPhonenumber([1,2,3,4,5,6,7,8,9,0]);
function createPhonenumber(numbers) {
    var format = "(xxx) xxx-xxxx"; //手机模板
    for (var i = 0; i < numbers.length; i++){
        format = format.replace('x', numbers[i]);
    }
    return format
}
// console.log("xyz".replace("x",1));
// console.log("x9yz".replace(/[0-9]/,1));
console.log(createPhonenumber([1,2,3,4,5,6,7,8,9,0]));