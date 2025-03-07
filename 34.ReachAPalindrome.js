function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function isPalindrome(num) {
    return num === reverseNumber(num);
}

function stepsToPalindrome(n) {
    let steps = 0;
    
    while (!isPalindrome(n)) {
        n += reverseNumber(n);
        steps++;
    }

    return steps;
}

// Test Cases
console.log(stepsToPalindrome(87));  // Output: 4 (87 → 165 → 726 → 1353 → 4884)
console.log(stepsToPalindrome(196)); // Output: (May lead to infinite loop, needs additional handling)
console.log(stepsToPalindrome(121)); // Output: 0 (already a palindrome)
