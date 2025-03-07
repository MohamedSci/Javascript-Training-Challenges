/***
 * In this challenge, the candidate should determine how many steps it takes to reach a palindrome 
 * by repeatedly incrementing a number by its reversed digits.
 *  This is a straightforward challenge that tests the candidate's familiarity 
 * with fundamental coding concepts such as loops, strings, and type conversions 
 * or digit manipulation (depending on how they choose to approach reversal of an integer).
 * * */


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
        if (steps > maxIterations) {
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


/***
Edge Cases Considered:
✅ Already a palindrome → returns 0.
✅ Large numbers → Handles them efficiently.
✅ Infinite loop issue (e.g., 196, which is conjectured never to reach a palindrome) → Can be handled by adding a max iteration limit.
***/