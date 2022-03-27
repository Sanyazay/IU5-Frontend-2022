/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    let res = [];
    for(let i=0;i < arr.length;i++){
        let start = true
        for(let j =0;j < arr.length;j++){
            if(arr[i].from == arr[j].to){
                start = false
            }
        }
        if(start){
            res.push(arr[i])
            break
        }
    }
    for(let i = 0;i<arr.length;i++){
        for(let j =0;j < arr.length;j++){
            if(res[res.length-1].to == arr[j].from){
                res.push(arr[j])
            }
    }
    }
    return res;
  }
module.exports = makeRoute;