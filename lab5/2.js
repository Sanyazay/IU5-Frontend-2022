/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
 function curry(f) {
    //code here
    
    return function func(...arguments1){
        
        
        if(arguments1.length >= f.length){
            return f(...arguments1)
        }else{
            return (...nextarguments)=>{
                
                
                return func( ...arguments1.concat(nextarguments))
            }
        }
    }
}
module.exports = curry;
