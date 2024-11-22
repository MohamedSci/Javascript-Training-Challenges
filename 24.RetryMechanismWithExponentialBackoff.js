// 24. Retry Mechanism with Exponential Backoff
// Problem: Implement a retry mechanism for failed API calls with exponential backoff.

function retryWithExponentialBackoff(fn, retries, delay) {
    return new Promise((resolve, reject) => {
        const attempt = (retriesLeft, delayLeft) => {
            fn()
                .then(resolve)
                .catch((err) => {
                    if (retriesLeft === 0) {
                        reject(err);
                    } else {
                        setTimeout(() => attempt(retriesLeft - 1, delayLeft * 2), delayLeft);
                    }
                });
        };

        attempt(retries, delay);
    });
}

// Test case
const apiCall = () => new Promise((resolve, reject) => Math.random() > 0.7 ? resolve('Success') : reject('Failed'));

retryWithExponentialBackoff(apiCall, 3, 1000).then(console.log).catch(console.error);


// Explanation:
// -Recursively calls the function with increasing delay (exponential backoff) on failure.
// -Stops after the specified retries or resolves if the function succeeds.