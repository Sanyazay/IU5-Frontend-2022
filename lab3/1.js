/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */

function capitalize(str) {
    let words = str.split(" ");
    let result = [];
    for(let i = 0; i < words.length; i++){
        
        result.push(words[i].replace(words[i][0],words[i][0].toUpperCase()))
    }
    return result.join(" ")
    
}

module.exports = capitalize;
