function DSA60() {
    const str = "1111222233334444";
    const result = [];

    for (let i = 1; i < str.length; i++) {
        if (i % 4 === 0) {
            result.push(str.slice(i - 4, i));
        }
    }
    console.log(result);
    result.push(str.slice(-4));
    console.log(result.join("-"));
}

DSA60();