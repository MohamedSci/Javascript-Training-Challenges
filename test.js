function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function isPalindrome(num) {
    return num === reverseNumber(num);
}

function stepsToPalindrome(n, maxIterations = 1000) {
    var steps = 0;
    while (!isPalindrome(n)) {
        n += reverseNumber(n);
        steps++;
        if (steps >= maxIterations) {
            steps = -1;
            break;
        }
    }
    return steps;
}


// Test Cases
console.log(stepsToPalindrome(87));  // Output: 4 (87 → 165 → 726 → 1353 → 4884)
console.log(stepsToPalindrome(196)); // Output: (May lead to infinite loop, needs additional handling)
console.log(stepsToPalindrome(121)); // Output: 0 (already a palindrome)