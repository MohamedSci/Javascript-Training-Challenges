// 4. String Compression
// Problem: Compress a string by counting repeated characters.



function compressString(str) {
    var inputSet = new Set(str.split(''));
    var setList = [...inputSet];
    var mapC = {};
    mapC = setList.reduce((acc, ch) => { acc[ch] = 0; return acc; }, {});
    for (let i = 0; i < str.length; i++) {
        var c = mapC[str[i]];
        mapC[str[i]] = c + 1;
    }

    return mapC;
}

// Test cases
// Print Object with the count of Each Repeat
console.log(compressString('BOEXZXZZaaabXXbccXXcaa'));
// Print Each Char once 
console.log(Object.keys(compressString('BOEXZXZZaaabXXbccXXcaa'))); 




//   Explanation:
// - Convert the String to List with Split('') then Convert the List to Set of uniqe chars .
// Create Object that has each uniqe Char as Key and value of Init Count (0) with Reduce method
// Loop theough all the chars in the string params and get increase the current count of its char in the object Certain key value by One