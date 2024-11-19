function createLeak() {
    const array = [];
    setInterval(() => {
        for (let i = 0; i < 1000; i++) {
            array.push(new Array(1000).join('*'));
            console.log(array);
        }
    }, 1000);
}
createLeak();