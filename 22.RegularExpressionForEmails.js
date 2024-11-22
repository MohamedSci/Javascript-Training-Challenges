// 22. Regular Expression for Emails
// Problem: Validate an email address.

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return regex.test(email);
}


// Test cases
console.log(validateEmail("test@example.com")); // Output: true
console.log(validateEmail("invalid-email")); // Output: false


// Explanation:
// -Matches typical email patterns with support for common edge cases.