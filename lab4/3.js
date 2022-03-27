/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    const subres = new Array()
    let arr = new Array()
    arr.push(str[0])
    for(let i = 1;i < str.length;i++){

        let current = str[i]
        if(arr.includes(current)){
                arr.push(current)
        }else{
            subres.push(arr.join(''))
            arr = []
            arr.push(current)
        }


    }
    subres.push(arr.join(''))
    return subres.map((x)=> x.length > 1 ? x[0]+x.length : x).join('')
}

module.exports = rle;
