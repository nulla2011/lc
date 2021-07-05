/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count=0;
    while (n>1) {
        if (n&1==1) {
            count+=1;
        }
        n=n>>>1;
    }
    if (n==1) {
        count+=1;
    }
    return count;
};

let n=0b11111111111111111111111111111101;
console.log(hammingWeight(n));