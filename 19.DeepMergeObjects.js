// 19. Deep Merge Objects
// Problem: Write a function to deeply merge two objects.

function deepMerge(obj1, obj2) {
    const result = { ...obj1 };
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === "object" && !Array.isArray(obj2[key])) {
                result[key] = deepMerge(result[key] || {}, obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
}



// Test cases
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

console.log(deepMerge(obj1, obj2));
// Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }


// Explanation:
// -Recursively merges objects while avoiding reference sharing for nested objects.
// -Handles conflicts by prioritizing obj2.