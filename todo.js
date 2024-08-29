const obj = {
    name: 'Alice',
    greet: function () {
        setTimeout(function () {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};

obj.greet();

// Without arrow function:
// setTimeout(function() {
//   console.log(`Hello, ${this.name}!`);
// }.bind(this), 1000);