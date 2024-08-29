// 1. Explain the differences between == and ===.
// == is used for comparison and === is used for comparison and type checking.

// ============================================================================
// 2. What is event delegation, and how does it function in JavaScript?
// Event delegation is a technique in which a single event listener is attached to a parent element to manage events on its child elements. This is beneficial for performance and memory usage, as it reduces the number of event listeners needed.

// Example:
// HTML:
// <ul id="parent">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>

// JavaScript:
// const parent = document.getElementById('parent');
// parent.addEventListener('click', function(event) {
//   if (event.target.tagName === 'LI') {
//     console.log('You clicked on:', event.target.textContent);
//   }
// });



// ============================================================================
// 3. Can you provide an illustration of how ES6 has altered the approach to working with "this" in JavaScript?
// ES6 introduced arrow functions, which do not have their own "this" context. Instead, they inherit the "this" value from the surrounding code. This can be beneficial when working with event handlers or callbacks, as it eliminates the need to use bind or store a reference to "this" in a separate variable.

// Example:
// const obj = {
//   name: 'Alice',
//   greet: function() {
//     setTimeout(() => {
//       console.log(`Hello, ${this.name}!`);
//     }, 1000);

//     // Without arrow function:
//     // setTimeout(function() {
//     //   console.log(`Hello, ${this.name}!`);
//     // }.bind(this), 1000);



// ============================================================================
// 4. Explain the concept of prototypal inheritance.
// Prototypal inheritance is a fundamental concept in JavaScript where objects can inherit properties and methods from other objects. Each object has a prototype object, which acts as a template for the object. When a property or method is accessed on an object, JavaScript will first look for it on the object itself, and if not found, it will look up the prototype chain until it finds the property or method.

// Example:
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const alice = new Person('Alice');
// alice.greet(); // Output: Hello, my name is Alice




// ============================================================================
// 5. Differentiate between a variable that is null, undefined, or undeclared.

// Null: A variable with a value of null explicitly means that it has no value or has been intentionally set to null. It is a primitive value that represents the absence of a value.

// Example:
// let foo = null;
// console.log(foo); // Output: null

// Undefined: A variable is undefined when it has been declared but has not been assigned a value. It is a type in JavaScript that represents the absence of a value or an uninitialized variable.

// Example:
// let bar;
// console.log(bar); // Output: undefined

// Undeclared: A variable is undeclared when it has not been declared using the var, let, or const keywords. Accessing an undeclared variable will result in a ReferenceError.

// Example:
// console.log(baz); // ReferenceError: baz is not defined





// ============================================================================
// 6. Define what a closure is and describe its uses and advantages.
// A closure is a combination of a function and the lexical environment within which that function was declared. This allows the function to access variables from its outer scope even after the outer function has finished executing. Closures are commonly used to create private variables, currying, and callback functions.

// Example:

// Private variables:
// function counter() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   };
// }

// ============================================================================
// 7. Explain the primary distinction between the Array.forEach() loop and Array.map() method, as well as when to choose one over the other.

// Array.forEach(): The forEach() method executes a provided function once for each array element. It does not return a new array and is primarily used for side effects, such as logging or updating existing elements in the array.

// Example:
// const numbers = [1, 2, 3];

// numbers.forEach((num) => {
//   console.log(num * 2);
// });


// Array.map(): The map() method creates a new array by calling a provided function on every element in the original array. It returns a new array with the results of the function applied to each element.

// Example:
// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6]
// ============================================================================
// 8. What is a common scenario for employing anonymous functions?
// Anonymous functions are often used as callback functions or immediately invoked function expressions (IIFE). They are useful in situations where a function is only needed for a specific task and does not need to be reused elsewhere in the code.

// Example:

// Callback function:
// const numbers = [1, 2, 3];

// numbers.forEach(function(num) {
//   console.log(num * 2);
// });

// Immediately Invoked Function Expression (IIFE):
// (function() {
//   console.log('This function is immediately invoked');
// })();

// ============================================================================
// 9. Distinguish between host objects and native objects.
// Host objects are objects provided by the environment in which JavaScript is running, such as the browser or Node.js. Examples of host objects include the window object in the browser or the global object in Node.js. Host objects are not part of the ECMAScript specification and may vary between environments.

// Native objects, on the other hand, are objects defined by the ECMAScript specification and are built into the JavaScript language. Examples of native objects include Array, Object, and Function. Native objects are consistent across all JavaScript environments and are part of the core language features.

// ============================================================================
// 10. Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'

// 'function User(){}': This is a function declaration that defines a function named User. It does not create an instance of the User function or assign it to a variable.

// 'var user = User()': This calls the User function as a regular function, not as a constructor function. It does not create a new instance of the User function or assign it to the user variable.

// ============================================================================
// 11. Can you elucidate the purposes of Function.call and Function.apply, along with their notable differences?
// Function.call and Function.apply are both methods that allow you to call a function with a specified this value and arguments.


// Function.call: The call() method calls a function with a given this value and arguments provided individually.

// Example:
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// greet.call(null, 'Alice'); // Output: Hello, Alice!
// ============================================================================
// 12. Describe the Function.prototype.bind method.
// The bind() method creates a new function that, when called, has its this keyword set to the provided value. It allows you to permanently bind a specific this value to a function, which can be useful for event handlers or callbacks.

// Example:
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// const boundGreet = greet.bind(null, 'Alice');
// boundGreet(); // Output: Hello, Alice!

// ============================================================================
// 13. Explain the differences between feature detection, feature inference, and utilizing the User Agent(UA) string.


// Feature detection: Feature detection is a technique used to detect whether a browser supports a specific feature before using it. This is done by checking for the existence of the feature or property in the browser's environment.

// Example:
// if (typeof window.localStorage !== 'undefined') {
//   // Browser supports localStorage
// }


// Feature inference: Feature inference is a technique that assumes the presence of a feature based on the presence of another feature. This can lead to unreliable code as it relies on assumptions rather than direct feature detection.



// ============================================================================
// 14. Define the concept of "hoisting."
// 15. What is type coercion, and what are some common pitfalls associated with relying on it in JavaScript code?
// 16. Describe event bubbling and event capturing.
// 17. What distinguishes an "attribute" from a "property"?
// 18. List the advantages and disadvantages of extending built-in JavaScript objects.
// 19. Discuss the same-origin policy's implications for JavaScript.
// 20. Why is it referred to as a "Ternary operator," and what does the term "Ternary" signify?
// 21. Define strict mode and outline some of its advantages and disadvantages.
// 22. Analyze the pros and cons of writing JavaScript code in a language that compiles to JavaScript.
// 23. What tools and techniques do you employ for debugging JavaScript code?
// 24. Enumerate the benefits and drawbacks of immutability and explain how you can achieve it in your code.
// 25. Differentiate between synchronous and asynchronous functions and elucidate the event loop.
// 26. Explain the disparities between variables created using let, var, or const.
// 27. Compare ES6 classes and ES5 function constructors, and furnish a use case for the arrow(=>) function syntax.
// 28. Describe the advantages of using the arrow syntax for methods in constructors.
// 29. Define a higher-order function and provide an example of object or array destructuring.
// 30. Give an example of generating a string using ES6 Template Literals and explain their benefits.
// 31. Provide an example of a curry function and clarify why this syntax can be advantageous.
// 32. Discuss the benefits of using spread syntax and differentiate it from rest syntax.
// 33. Explain how code sharing between files can be accomplished.
// 34. Define what a promise is and describe its applications.