// var arr = [89, -3, 88, 23, 1, 4, 8, 1900, 444, 34, 56, 83, 21, 90];
// function sorting(arr) {
//     var newList = [];
//     newList.push(arr[0]);
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] >= newList.pop()) {
//             newList.push(arr[i])
//         }
//         if (arr[i] < newList[0]) {
//             newList.shift(0,arr[i]);
//         }
//     }
//     return newList;

// }

// console.log(sorting(arr));


var arr = [89, -3, 88, 23, 1, 4, 8, 1900, 444, 34, 56, 83, 21, 90];

function sorting(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sorting(arr));
