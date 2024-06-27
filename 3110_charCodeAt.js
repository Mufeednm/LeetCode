var scoreOfString = function(s) {
    let score = 0;
    for (let index = 0; index < s.length-1; index++) {
        score +=Math.abs(s.charCodeAt(index) - s.charCodeAt(index+1)) // Add the ASCII value of each character
    }
    return score;
};

console.log(scoreOfString("hello")); // Output: 532 (ASCII sum of 'h', 'e', 'l', 'l', 'o')
