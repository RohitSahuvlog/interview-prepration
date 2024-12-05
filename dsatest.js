// Find the longest common prefix among all strings in given array['flower', 'flow', 'flight']

// Input: ['flower', 'flow', 'flight']
// Output: 'fl'

function findCommonPrefix(arr, prefix) {
    if (arr.length === 0) return prefix;
    let first = arr[0];
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j][i] !== first[i]) {
                return prefix;
            }
        }
        prefix += first[i];
    }
    return prefix;
}

console.log(findCommonPrefix(['flower', 'flow', 'flight'], '')); // 'fl'