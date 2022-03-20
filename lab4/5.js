/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    
    const openbrackets = ['[', '(', '<', '{']
    let closebrackets = new Map([
        [']',  '['],
        [')',    '('],
        ['>', '<'],
        ['}','{']
      ]);
    const check = new Array()
    
    for(let i = 0;i < str.length; i++){
        if(check.length == 0){
            check.push(str[i])
        }else{
            if(openbrackets.includes(str[i])){
                check.push(str[i])
            }else{
                if(check.pop() == closebrackets.get(str[i])){
                }else{
                    return false
                }
            }
        }
    }
    return !(check.length > 0)
}

module.exports = checkBrackets;
