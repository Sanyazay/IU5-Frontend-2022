/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
 function getAnagramms(arr) {
    const res = new Array()
    const uniq = new Set()
    for(let i=0;i < arr.length;i++){
        if(!uniq.has(arr[i].toLowerCase().split("").sort().join(""))){
            const subres = new Array()
            subres.push(arr[i])
            for(let j = i + 1;j < arr.length;j++){
                if(subres[0].toLowerCase().split("").sort().join("").includes(arr[j].toLowerCase().split("").sort().join(""))){
                    subres.push(arr[j])
                }
            }
            uniq.add(arr[i].toLowerCase().split("").sort().join(""))
            res.push(subres)
        }
    }
    return res
}

module.exports = getAnagramms;
