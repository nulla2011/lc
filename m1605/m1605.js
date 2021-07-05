/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    //let zeroCount=0;
    let fiveCount = 0;
    let maxFiveExp = Math.floor(Math.log(n) / Math.log(5));
    for (let i = 1; i < maxFiveExp + 1; i++) {
        fiveCount += Math.floor(n / (5 ** i));
    }
    return fiveCount;
};

let n = 25;
console.log(trailingZeroes(n));