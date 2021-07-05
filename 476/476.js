/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    /* let count=0;
    let tmp=num;
    while (tmp){
        count+=1;
        tmp=tmp>>1;
    } */
    let len=num.toString(2).length;
    return num^((1<<len)-1);
};

let n=5;
console.log(findComplement(n));