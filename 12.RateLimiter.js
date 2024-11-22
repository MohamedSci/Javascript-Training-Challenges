// 12. Rate Limiter
// Problem: Implement a rate limiter function that ensures a callback is executed at most once in a given time frame.

function rateLimiter(callback, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            callback(...args);
        }
    };
}


// Test cases
const log = () => console.log('Called at', Date.now());
const limitedLog = rateLimiter(log, 1000);

limitedLog(); // Called immediately
limitedLog(); // Ignored if within 1 second
setTimeout(limitedLog, 1100); // Called after 1.1 seconds
// Explanation:
// -lastCall stores the timestamp of the last execution.
// -Date.now() checks the current time.
// -If the difference between now and lastCall exceeds the limit, the callback is executed, and lastCall is updated.