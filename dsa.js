// 1. Distinct subsets of given set are
// { }, { 1 }, { 2 }, { 1, 2 }, { 3 }, { 1, 3 }, { 2, 3 }, { 1, 2, 3 }
// Code:-
// function distinctSubsets(arr) {
//     let result = [];

//     function backtrack(index, currentSubset) {
//         // Add the current subset to the result array
//         result.push([...currentSubset]);
//         // Generate subsets by including or excluding each element
//         for (let i = index; i < arr.length; i++) {
//             // Include the current element in the subset
//             currentSubset.push(arr[i]);
//             // Recursively generate further subsets
//             backtrack(i + 1, currentSubset);
//             // Exclude the current element from the subset (backtrack)
//             currentSubset.pop();
//         }
//     }
//     // Start the backtracking with an empty subset
//     backtrack(0, []);
//     return result;
// }

// let arr = [1, 2, 3];
// console.log(distinctSubsets(arr));
// Output: [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]
// Time Complexity: O(2^N) why? because for each element we have two choices either to include it or exclude it
// Space Complexity: O(2^N) why? because for each element we have two choices either to include it or exclude it

// ========================================================================================================

// 2.Given an array of N space - separated integers you have to sort the array in non - decreasing order of their sum of digits and if two numbers have same sum of digits then the smaller number comes first.
// input = [12, 34, 56, 78, 90];
// Output: [12, 34, 90, 56, 78]
// function sumOfDigits(num) {
//     let sum = 0;
//     while (num) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//         console.log(num, sum);
//     }
//     return sum;
// }

// function sortArray(arr) {
//     arr.sort((a, b) => {
//         let sumA = sumOfDigits(a);
//         let sumB = sumOfDigits(b);
//         // if (sumA === sumB) {
//         //     return a - b;
//         // }
//         return sumA - sumB;
//     });
//     return arr;
// }

// let arr = [12, 34, 56, 78, 90, 72];
// console.log(sortArray(arr));

// ========================================================================================================

// 3.You are given two pointers which are reference to the head node of two lists.These lists intersect at one point and from there on, they merge into one.
// You have to find this intersection point and the list from this till the end, reverse it and print the reversed list.
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };
// // Complete the function below
// var intersectAndReverse = function (head1, head2) {

//     let c1 = getCount(head1);
//     let c2 = getCount(head2);
//     let d;

//     if (c1 > c2) {
//         d = c1 - c2;
//         return _getIntesectionNode(d, head1,
//             head2)
//     }
//     else {
//         d = c2 - c1;
//         return _getIntesectionNode(d, head2,
//             head1);
//     }

// }
// var r = []

// function _getIntesectionNode(d, node1,
//     node2) {
//     let i;
//     let current1 = node1;
//     let current2 = node2;

//     for (i = 0; i < d; i++) {
//         if (current1 == null) {
//             return -1;
//         }
//         current1 = current1.next;
//     }

//     while (current1 != null &&
//         current2 != null) {
//         if (current1.data == current2.data) {
//             r.unshift(current1.data)
//         }

//         current1 = current1.next;
//         current2 = current2.next;
//     }
//     return console.log(r.join(" "));
// }

// function getCount(node) {
//     let current = node;
//     let count = 0;

//     while (current != null) {
//         count++;
//         current = current.next;
//     }

//     return count;
// }

// // input  1 34 5 2 108
// //        7 5 2 108
// // output 108 2 5

// let head1 = new LinkedListNode(1);
// head1.next = new LinkedListNode(34);
// head1.next.next = new LinkedListNode(5);
// head1.next.next.next = new LinkedListNode(2);
// head1.next.next.next.next = new LinkedListNode(108);

// let head2 = new LinkedListNode(7);
// head2.next = new LinkedListNode(5);
// head2.next.next = new LinkedListNode(2);
// head2.next.next.next = new LinkedListNode(108);

// intersectAndReverse(head1, head2);

// ========================================================================================================

// 4.add to link list
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below
var addTwoNumbers = function (list1, list2) {
    var resultHead = new ListNode(0)
    var currentPointer1 = list1;
    var currentPointer2 = list2;
    var currentResultPointer = resultHead;
    var carryOver = 0;

    while (currentPointer1 !== null || currentPointer2 !== null) {
        var value1 = (currentPointer1 != null) ? currentPointer1.val : 0;
        var value2 = (currentPointer2 != null) ? currentPointer2.val : 0;
        let sum = carryOver + value1 + value2
        carryOver = Math.floor(sum / 10)

        currentResultPointer.next = new ListNode(sum % 10)

        currentResultPointer = currentResultPointer.next;
        if (currentPointer1 != null) { currentPointer1 = currentPointer1.next }
        if (currentPointer2 != null) { currentPointer2 = currentPointer2.next }
    }

    return resultHead.next;
};

let list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list1, list2)); // 7 -> 0 -> 8


let str = "abcabcdhlmnopq";
let alphates = "abcdefghijklmnopqrstuvwxyz".split("");


function getAlphates(str) {
    let result = "";
    max = "";
    for (let i = 1; i < str.length; i++) {

        if (alphates.findIndex((item) => item === str[i - 1]) + 1 === alphates.findIndex((item) => item === str[i])) {
            console.log(str[i - 1], str[i], alphates.findIndex((item) => item === str[i - 1]) + 1 === alphates.findIndex((item) => item === str[i]));
            result += str[i];
        } else {
            result = str[i];
        }
        if (result.length > max.length) {
            max = result;
        }
    }

    return max;

}

console.log(getAlphates(str)); // abcdefghlmno
