/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
 function getMinMax(str) {
    let elements = str.replace(/[^0-9 -.]/g,"").replace(/\s{2,}/g," ").replace(/[-]{2,}/g,"-").split(" ");
    elements = elements.filter(x => x!="");
    let min = Number(elements[0]);
    let max = Number(elements[0]);
    for(let i = 0; i < elements.length; i++){
        if(min > Number(elements[i])){
            min = Number(elements[i])
        }
        if(max < Number(elements[i])){
            max = Number(elements[i])
        }
    }
    let result = {};
    result["min"] = min;
    result["max"] = max;
    return result
}

module.exports = getMinMax;
