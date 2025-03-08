// 1️⃣ 
// متتالية فيبوناتشي
//  هي سلسلة أرقام، كل رقم فيها مجموع الرقمين السابقين.
// 2️⃣ بتبدأ بـ (0, 1) وتكمل بنفس النمط.
// 3️⃣ بتظهر في الطبيعة والفن والتشفير والرياضيات.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
function memorizedFibonacci() {
    var cache = {};
    return function Fibonacci(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return n;
        return (cache[n] = Fibonacci(n - 1) + Fibonacci(n - 2));
    }
}





function Fibonacci(n) {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}



var testArg= 10000;
console.time('Memorized');
var test2 = memorizedFibonacci();
var testMeomerizedFib= test2(testArg);
console.log(testMeomerizedFib);
console.timeEnd('Memorized');


console.time('Base');
var testFib = Fibonacci(testArg);
console.log(testFib);
console.timeEnd('Base');