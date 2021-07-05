/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let list = new Array();
    let num = 1;
    while (num < 10 ** n) {
        //list.push(num);
        list[num - 1] = num;
        num += 1;
    }
    return list;
};

let n = 2;
console.log(printNumbers(n));