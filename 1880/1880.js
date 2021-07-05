/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    //let dic={a:1,b:2,c:3,d:4,e:5,f:6}
    return (word2Num(firstWord) + word2Num(secondWord) == word2Num(targetWord))
};

var word2Num = (word) => {
    let num = 0;
    for (let i = 0; i < word.length; i++) {
        num = num * 10 + word[i].charCodeAt() - 97;
    }
    return num;
}

let firstWord = "aaa", secondWord = "a", targetWord = "aab";
console.log(isSumEqual(firstWord, secondWord, targetWord));