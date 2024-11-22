// 15. Balanced Parentheses
// Problem: Write a function that checks if a string has balanced parentheses.

function isBalanced(str) {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (const char of str) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char); // Push opening brackets to the stack
        } else if ([')', ']', '}'].includes(char)) {
            if (stack.pop() !== pairs[char]) {
                return false; // Mismatched or unbalanced
            }
        }
    }

    return stack.length === 0; // Check if all brackets are balanced
}



// Test cases
console.log(isBalanced('(a + b) * (c - d)')); // Output: true
console.log(isBalanced('(a + b * (c - d)')); // Output: false
console.log(isBalanced('[{()}]')); // Output: true
console.log(isBalanced('[{(}]')); // Output: false


// Explanation:
// -A stack is used to track opening brackets.
// -For each character:
// oPush it onto the stack if it’s an opening bracket.
// oIf it’s a closing bracket, pop the stack and check if it matches the expected opening bracket.
// -At the end, if the stack is empty, all brackets are balanced.