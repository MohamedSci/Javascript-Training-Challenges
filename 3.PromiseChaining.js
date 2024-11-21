// 3. Promise Chaining
// Problem: Fetch data from an array of URLs and return their JSON responses.

async function fetchData(urls) {
    const promises = urls.map(url => fetch(url).then(response => response.json()));
    return Promise.all(promises);
}

// Test cases
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
];

fetchData(urls).then(data => console.log(data));



//   Explanation:
// -Array.prototype.map() is used to create an array of promises, where each promise fetches data from a URL and parses it as JSON.
// -Promise.all() is used to run all these promises in parallel and wait for all of them to resolve.
// -The function is async, so it returns a promise that resolves with an array of JSON responses.