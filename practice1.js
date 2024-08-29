/*
 5. Find the max count of consecutive 1’s in an array ?
    I/P: [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0]
    O/P: 4

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        count++;
        maxCount = Math.max(maxCount, count);
      } else {
        count = 0;
      }
    }
 6. Find the factorial of given number ?

    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    console.log(factorial(5)); // 120

 7. Given 2 arrays that are sorted [0, 3, 4, 31] and [4, 6, 30]. Merge them and sort [0, 3, 4, 4, 6, 30, 31] ?

    function mergeSortedArrays(arr1, arr2) {
        const mergedArray = [];
        let array1Item = arr1[0];
        let array2Item = arr2[0];
        let i = 1;
        let j = 1;

        // Check input
        if (arr1.length === 0) {
            return arr2;
        }
        if (arr2.length === 0) {
            return arr1;
        }

        while (array1Item || array2Item) {
          if(array1Item[i] < array2Item[j]){
            mergedArray.push(array1Item[i])
            i++
          }else{
             mergedArray.push(array1Item[j])
             j++
          }

        }


        return mergedArray;
    }

    console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // [0, 3, 4, 4, 6, 30, 31]
 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value     in arr1 has its corresponding value squared in array2. The frequency of values must be same.

    function same(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        let frequencyCounter1 = {};
        let frequencyCounter2 = {};
        for (let val of arr1) {
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }
        for (let val of arr2) {
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }
        for (let key in frequencyCounter1) {
            if (!(key ** 2 in frequencyCounter2)) {
                return false;
            }
            if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
                return false;
            }
        }
        return true;
    }

    console.log(same([1, 2, 3], [4, 1, 9])); // true
 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.

    function validAnagram(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        const lookup = {};
        for (let i = 0; i < str1.length; i++) {
            let letter = str1[i];
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        }
        for (let i = 0; i < str2.length; i++) {
            let letter = str2[i];
            if (!lookup[letter]) {
                return false;
            } else {
                lookup[letter] -= 1;
            }
        }
        return true;
    }

    console.log(validAnagram('anagram', 'nagaram')); // true
 10. Write logic to get unique objects from below array ?
     I/P: [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];
     O/P: [{ name: "sai" }, { name: "Nang" }, { name: "111111" }]


        const uniqueObjects = [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));
 11. Write a JavaScript program to find the maximum number in an array.
 ans: Math.max(...arr);

 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

        function evenNumbers(arr) {

            return arr.filter((num) => num % 2 === 0);

        }

        console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]
 13. Write a JavaScript function to check if a given number is prime.

        function isPrime(num) {
            if (num === 1) {
                return false;
            } else if (num === 2) {
                return true;
            } else {
                for (let i = 2; i < num; i++) {
                    if (num % i === 0) {
                        return false;
                    }
                }
                return true;
            }
        }

        console.log(isPrime(11)); // true
 14. Write a JavaScript program to find the largest element in a nested array.
     [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

        function findLargest(arr) {
            let largest = -Infinity;
            function recurse(subArr) {
                for (let i = 0; i < subArr.length; i++) {
                    if (Array.isArray(subArr[i])) {
                        recurse(subArr[i]);
                    } else {
                        if (subArr[i] > largest) {
                            largest = subArr[i];
                        }
                    }
                }
            }
            recurse(arr);
            return largest;
        }

        console.log(findLargest([[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]])); // 709
 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
        function fibonacci(n) {
            const result = [0, 1];
            for (let i = 2; i < n; i++) {
                result.push(result[i - 2] + result[i - 1]);
            }
            return result;
        }
        console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 16. Given a string, write a javascript function to count the occurrences of each character in the string.
        function countCharacters(str) {
            const result = {};
            for (let i = 0; i < str.length; i++) {
                if (result[str[i]]) {
                    result[str[i]] += 1;
                } else {
                    result[str[i]] = 1;
                }
            }
            return result;
        }

        console.log(countCharacters('hello')); // { h: 1, e: 1, l: 2, o: 1 }
 17. Write a javascript function that sorts an array of numbers in ascending order.


 18. Write a javascript function that sorts an array of numbers in descending order.
 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

 20. Implement a javascript function that flattens a nested array into a single-dimensional array.
 21. Write a function which converts string input into an object
     ("a.b.c", "someValue");
     { a: { b: { c: "someValue" } } } */
