// function kthSmallest(arr, k) {
//     arr.sort((a, b) => a - b);
//     console.log(arr);
//     return arr[k - 1];
// }

const arr = [7, 10, 4, 3, 20, 15];

// console.log(kthSmallest(arr, 3)); // 7


// function kthLargest(arr, k) {
//     arr.sort((a, b) => b - a);
//     console.log(arr);
//     return arr[k - 1];
// }

// console.log(kthLargest(arr, 3)); // 10

// best approch

function kthSmallest(arr, k) {
    let left = Math.min(...arr);
    let right = Math.max(...arr);
    let mid;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= mid) {
                count++;
            }
        }
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

console.log(kthSmallest(arr, 3)); // 7

// dry run
// left = 3, right = 20, mid = 11



function kthLargest(arr, k) {
    let left = Math.min(...arr);
    let right = Math.max(...arr);
    let mid;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= mid) {
                count++;
            }
        }
        if (count < k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}


console.log(kthLargest(arr, 3)); // 7
