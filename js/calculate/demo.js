// 所有的奖金策略用一个JSON Object 来表达
const strategies = {
    SSP(salary) {
        return salary * 20
    },
    "S": (salary) => {
        return salary * 18
    },
    "A": (salary) => {
        return salary * 13
    },
    "B": (salary) => {
        return salary * 14
    },
    "C": (salary) => {
        return salary * 15
    },
}
const calculateBonus = (salary, level = 'C') => {
    // return (level == 'A')? salary * 13 :  (level == 'S'? salary * 18 : (level == 'B'? salary * 14 : salary * 15))
    return strategies[level](salary);
}

console.log(calculateBonus(22000, 'SSP'));