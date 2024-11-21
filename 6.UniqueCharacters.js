// 6. Unique Characters
// Problem: Write a function that checks if a string has all unique characters.

function hasUniqueCharacters(str) {
    const charSet = new Set();
    for (const char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}



// Test cases
console.log(hasUniqueCharacters('hello')); // Output: false
console.log(hasUniqueCharacters('world')); // Output: true
console.log(hasUniqueCharacters('abcABC')); // Output: true


//   Explanation:
// -A Set is used to store characters as we iterate through the string.
// -If a character is already in the Set, the function returns false.
// -Otherwise, the character is added to the Set.
// -This solution has O(n) time complexity, where n is the length of the string.