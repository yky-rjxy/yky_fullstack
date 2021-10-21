// 年收入？ 12*salary
// bonus 表现相关
// function calculateBonus(salary, bonus) {
//     return 
// }

// 函数表达式
// 箭头函数
// level sp ssp  A 1 B 2 C 3 D 5
// 故事场景  逻辑
// const calculateBounce = (salary, level = 'C') => {
let calculateBounce; // 声明，内存里
console.log(typeof calculateBounce);
calculateBounce = null; // 为null的
console.log(typeof calculateBounce);
calculateBounce = '1111';
console.log(typeof calculateBounce);
calculateBounce = 2;
console.log(typeof calculateBounce);
calculateBounce = true;
console.log(typeof calculateBounce);
/**
 * @author yky
 * @date 20-12
 * @func 工资计算
 * @param {salary:number, level:string}
 * @return 总工资 number
 */

calculateBounce = (salary, level = 'C') => {
    if (level === 'S') {
        return salary * 18;
    }
    if (level === 'A') {
        return salary * 13;
    }
    if (level === 'B') {
        return salary * 14;
    }
    if (level === 'C') {
        return salary * 15;
    }
}
console.log(typeof calculateBounce);
console.log(calculateBounce(22000, 'S'));
console.log(calculateBounce(22000, 'A'));
console.log(calculateBounce(22000));
console.log(typeof [1, 2, 3]);