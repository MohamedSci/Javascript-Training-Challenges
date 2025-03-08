// Create Function
// If the number in the list is Odd number then halve  this number
// Else if the number in the list is Even number then double this number


var prices = [22,66,17,99];
console.log(prices)

var newPrices = prices.map(num=>(num %2 ===0 ? num *2 : num /2));

console.log(newPrices)
// Expected Output is [44,132,8.5,49.5]