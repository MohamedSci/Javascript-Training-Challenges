// 13. Debouncing
// Problem: Write a debounce function that delays a callback until after 
// a specified time has elapsed since the last call.

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}


// Test cases
const log = () => console.log('Debounced at', Date.now());
const debouncedLog = debounce(log, 500);

debouncedLog(); // Starts a timer
debouncedLog(); // Resets the timer
setTimeout(debouncedLog, 600); // Executes 600ms later

// Explanation:
// -clearTimeout(timer) cancels any ongoing timer when the function is called.
// -setTimeout starts a new timer for the callback.
// -The callback only executes after the delay if no further calls occur.