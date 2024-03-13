var isPalindrome = function(x) {
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

let x = 121;
console.log(isPalindrome(x)); // Output: true
