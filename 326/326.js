/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let re=/^1[0]*$/;
    return re.test(n.toString(3));
};

let n = 27;
console.log(isPowerOfThree(n));