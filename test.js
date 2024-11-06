// How does React work?
// ans = React is a JavaScript library that is used to build user interfaces. It is used for handling the view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

// What are React Hooks?
// ans = React Hooks are functions that let developers "hook into" React state and lifecycle features from function components. They let you use state and other React features without writing a class. You can also create your own Hooks to reuse stateful behavior between different components.

// What are props in React?
// ans = Props are inputs to a React component. They are data passed down from a parent component to a child component. Props are read-only and help you to create dynamic and interactive React applications. You can pass props to functional components or class components. You can also pass props to components using JSX.


// What are the advantages of ReactJS?
// ans = ReactJS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.

// How is React different from Angular JS?
// ans = React is a JavaScript library for building user interfaces, while Angular is a JavaScript framework for building web applications. React is focused on the view layer, while Angular provides a complete framework for building web applications. React uses a virtual DOM, while Angular uses a regular DOM. React is developed and maintained by Facebook, while Angular is developed and maintained by Google.


// What is Replication in MongoDB?
// ans = Replication is the process of synchronizing data across multiple servers. It provides redundancy and increases data availability with multiple copies of data on different database servers. Replication protects a database from the loss of a single server. It also allows you to recover from hardware failure and service interruptions.

// synchronize meaning that the data is consistent and up-to-date across all servers. Replication is commonly used in distributed systems to improve fault tolerance, scalability, and data availability. In MongoDB, replication is achieved through replica sets, which consist of multiple MongoDB instances that replicate data across servers. Replica sets provide automatic failover, data redundancy, and high availability for MongoDB databases.


// What are Higher-Order Components in React?
// ans = Higher-Order Components (HOC) are a pattern in React that lets you reuse component logic. HOCs are custom functions that accept a component and return a new component. They are a way to share reusable code between components. HOCs are commonly used for cross-cutting concerns such as logging, authentication, and data fetching.

// What are advantages of using React Hooks?
// ans = React Hooks provide a more concise and readable way to manage state and side effects in functional components. They allow you to reuse stateful logic without changing your component hierarchy. Hooks also make it easier to share logic between components and avoid common pitfalls of class components.

// What are the limitations of React?
// ans = React has a steep learning curve for beginners and can be challenging to set up and configure. It also requires a good understanding of JavaScript and JSX syntax. React can be less performant than other frameworks due to its virtual DOM implementation. It may also have compatibility issues with older browsers.

// What are the differences between a class component and Functional component?
// ans = Class components are ES6 classes that extend from React.Component and can have state and lifecycle methods. Functional components are simple functions that take props as an argument and return JSX. Functional components are easier to read and test, while class components have more features and flexibility.

// What are the key features of Node.js?
// ans = Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

// What do you mean by Asynchronous API?
// ans = Asynchronous APIs allow multiple tasks to be performed concurrently without blocking the main thread. They use callbacks, promises, or async/await to handle asynchronous operations. Asynchronous APIs are commonly used in web development to fetch data from servers, handle user input, and perform background tasks.

// What is Callback Hell and What is the main cause of it?
// ans = Callback Hell is a situation in JavaScript where multiple nested callbacks make the code difficult to read and maintain. The main cause of Callback Hell is the asynchronous nature of JavaScript, which can lead to deeply nested callback functions. This can make the code hard to understand and debug.

// What is Reconciliation in ReactJS?
// ans = Reconciliation is the process of updating the DOM to match the virtual DOM in React. It is a key feature of React that allows components to efficiently update and render changes to the user interface. Reconciliation compares the virtual DOM with the previous virtual DOM and only updates the necessary parts of the DOM.

// What is Sharding in MongoDB?
// ans = Sharding is the process of storing data records across multiple machines to improve performance and scalability. It allows you to distribute data across multiple servers or clusters to handle large amounts of data and high traffic. Sharding is a key feature of MongoDB that helps to scale horizontally and improve data availability.

// What is the difference between returning a callback and just calling a callback?
// ans = Returning a callback means passing a function as an argument to another function and returning it from the function. Calling a callback means invoking the function passed as an argument to another function. Returning a callback allows you to pass the function around and call it later, while calling a callback executes the function immediately.

// When should we embed one document within another in MongoDB?
// ans = You should embed one document within another in MongoDB when the embedded document is a part of the parent document and does not exist independently. Embedding documents can improve query performance by reducing the number of queries needed to retrieve related data. It is suitable for one-to-one and one-to-many relationships.

// Does MongoDB support Foreign Key Constraints?
// ans = MongoDB does not support foreign key constraints like traditional relational databases. Instead, MongoDB uses references or embedded documents to represent relationships between data. You can manually enforce referential integrity in MongoDB by using application logic or third-party tools.

// Explain advantages of BSON over JSON in MangoDB?
// ans = BSON (Binary JSON) is a binary-encoded serialization of JSON-like documents that MongoDB uses to store data. BSON has several advantages over JSON, including support for additional data types, better performance, and efficient storage. BSON also includes features like date and binary data types that are not available in JSON.


// How can you achieve Transaction in MongoDB?
// ans = MongoDB supports multi-document transactions starting from version 4.0. You can achieve transactions in MongoDB using the multi-document ACID transactions feature. Transactions allow you to perform multiple operations on multiple documents in a single transaction, ensuring data consistency and integrity.

// What does Node.js handle Child Threads?
// ans = Node.js is single-threaded and uses an event-driven, non-blocking I/O model to handle concurrency. It does not create child threads for handling multiple requests. Instead, it uses worker threads and the libuv library to manage asynchronous operations and perform I/O tasks in the background.

// How does concurrency work in Node.js?
// ans = Concurrency in Node.js is achieved through the event loop and non-blocking I/O operations. Node.js uses a single-threaded event loop to handle multiple requests concurrently. It processes I/O operations asynchronously and delegates them to worker threads, allowing the main thread to continue executing other tasks.

// How to avoid Callback Hell in Node.js?
// ans = You can avoid Callback Hell in Node.js by using promises, async/await, or libraries like async.js to handle asynchronous operations. Promises and async/await provide a more readable and maintainable way to handle asynchronous code by chaining multiple operations and handling errors more effectively.

// How do you handle backend routing in a MERN application?
// ans = In a MERN application, you can handle backend routing using Express.js, a Node.js web application framework. Express.js allows you to define routes for different HTTP methods and URLs, handle requests, and send responses. You can create RESTful APIs and route requests to specific controllers or middleware functions.

// How do you manage state in a MERN application, and what tools do you use for this?
// ans = In a MERN application, you can manage state using React's built-in state management and context API. You can use React's useState and useEffect hooks to manage local component state and handle side effects. For global state management, you can use libraries like Redux or React Context API to share state between components.

// Can you give an example of how you would optimize the performance of a MERN application?
// ans = To optimize the performance of a MERN application, you can use techniques like code splitting, lazy loading, server-side rendering, caching, and optimizing images and assets. You can also minify and bundle your code, reduce the number of HTTP requests, and use a content delivery network (CDN) to improve loading times.

// How do you test the components and functions of a MERN application?
// ans = You can test the components and functions of a MERN application using tools like Jest, Enzyme, and React Testing Library for unit testing and integration testing. You can also use tools like Postman or Insomnia for API testing and end-to-end testing. Testing helps ensure that your application works as expected and catches bugs early in the development process.

// Have you ever encountered a problem with the MERN stack, and if so, how did you resolve it?
// ans = Yes, I have encountered issues with the MERN stack, such as performance bottlenecks, memory leaks, and compatibility issues. To resolve these issues, I used tools like Chrome DevTools, memory profilers, and performance monitoring tools to identify and fix performance problems. I also reviewed the codebase, optimized queries, and refactored code to improve performance and resolve memory leaks.

// What is a stub in Node.js?
// ans = A stub in Node.js is a function that replaces the behavior of an existing function or module. Stubs are used in testing to simulate the behavior of external dependencies or functions that are not yet implemented. Stubs allow you to isolate the code under test and control its behavior to verify that it works correctly.

// Explain the concept of a thread pool. Which library handles it in Node.js?
// ans = A thread pool is a collection of worker threads that are used to execute asynchronous tasks in parallel. In Node.js, the libuv library handles the thread pool and manages asynchronous I/O operations. The libuv library provides an event loop and worker threads to handle concurrency and perform I/O tasks efficiently.


// What are smart components and dumb components?
// ans = Smart components and dumb components are design patterns used in React to separate concerns and improve code reusability. Smart components are class components that manage state and contain business logic. Dumb components are functional components that receive props and render UI elements. Smart components are connected to the Redux store, while dumb components are stateless and reusable.

// What are the key features of NodeJS? What are its challenges?
// ans = Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. Node.js is known for its scalability, performance, and real-time capabilities. However, it also has challenges such as callback hell, error handling, and managing asynchronous operations.

// What is occasion circle in NodeJS?
// ans = The event loop is a core concept in Node.js that allows it to perform non-blocking I/O operations efficiently. The event loop continuously checks the event queue for pending events and processes them in a loop. It allows Node.js to handle multiple requests concurrently and perform asynchronous operations without blocking the main thread.

// What do you understand by dependency injection? Why is it useful?
// ans = Dependency injection is a design pattern in which components are provided with their dependencies instead of creating them internally. It allows you to decouple components and make them more modular and reusable. Dependency injection helps improve code maintainability, testability, and scalability by reducing dependencies and making components easier to replace or extend.


// State the IDEs that are used in the development of Node.js.
// ans = Some popular IDEs used for Node.js development include Visual Studio Code, WebStorm, Atom, Sublime Text, and IntelliJ IDEA. These IDEs provide features like code completion, syntax highlighting, debugging, and version control integration to help developers write, test, and debug Node.js applications.

// What is REPL under Node.js? How does it work?
// ans = REPL stands for Read-Eval-Print Loop and is a built-in feature of Node.js that allows you to interactively run JavaScript code. REPL provides a command-line interface where you can type JavaScript code, which is then evaluated, executed, and the result is printed back to the console. REPL is useful for testing code snippets, debugging, and experimenting with JavaScript features.

// What is the difference between linear search and binary search?
// ans = Linear search is a simple search algorithm that sequentially checks each element in a list until a match is found. It has a time complexity of O(n) for an unsorted list. Binary search is a more efficient search algorithm that divides the list in half and compares the target value with the middle element. It has a time complexity of O(log n) for a sorted list.


// What do you understand by containerization?
// ans = Containerization is a lightweight form of virtualization that allows you to run applications in isolated environments called containers. Containers package an application and its dependencies into a single unit that can be deployed and run on any platform. Containerization provides consistency, portability, and scalability for applications and helps streamline the development and deployment process.

// What is a test pyramid? How do you actualize the test pyramid when examining HTTP APIs?
// ans = The test pyramid is a testing strategy that categorizes tests into three layers: unit tests, integration tests, and end-to-end tests. The test pyramid emphasizes writing more unit tests than integration tests and more integration tests than end-to-end tests. When testing HTTP APIs, you can actualize the test pyramid by writing unit tests for individual components, integration tests for API endpoints, and end-to-end tests for the entire application flow.

// What is the purpose of indexing in MongoDB?
// ans = Indexing in MongoDB is used to improve query performance by creating indexes on fields in a collection. Indexes allow MongoDB to quickly locate and retrieve documents that match a query criteria. Indexing can speed up query execution, reduce the number of documents scanned, and improve the overall performance of read operations in MongoDB.

// Explain the difference between classes and interfaces in TypeScript.
// What are decorators in typescript? How to use them?
// What do you understand by cross-site scripting?
// What is AOT and JIT compiler in Angular?
// What is the purpose of an event emitter under NodeJS?
// What is NPM in NodeJS? What is its functionality?
// What are Higher-Order Components (HOC) in React?
// What is Callback Hell, and what is the leading cause of it?
// How to avoid Callback Hell in Node.js?
// How does Node.js handle child threads?
// What is concurrency in Node.js? How does it work?
// What is the difference between returning a callback and just calling a callback?
// What is sharding in MongoDB? How to use it?
// What is the difference between partition and sharding in MongoDB?
// When should you consider embedding documents in MongoDB?
// Can you have foreign keys in MongoDB? What is the alternative to a foreign key in MongoDB?
// What is an event loop in Node JS?




// What is Memory Leak? How can we avoid?
// ans = A memory leak occurs when a program allocates memory but fails to release it, leading to a gradual decrease in available memory. Memory leaks can cause performance issues, crashes, and system instability. To avoid memory leaks, you can use tools like memory profilers, garbage collection, and proper memory management practices.
// example
// function createLeak() {
//     const array = [];
//     setInterval(() => {
//         for (let i = 0; i < 1000; i++) {
//             array.push(new Array(1000).join('*'));
//         }
//     }, 1000);
// }
// createLeak();
// In this example, the createLeak function creates a memory leak by continuously pushing large arrays into the array variable without releasing them. This can lead to memory exhaustion and performance issues over time.
// releasing meaning that the memory is not being used anymore and can be freed up for other processes. In JavaScript, memory leaks can occur when objects are not properly dereferenced or when circular references prevent garbage collection from reclaiming memory. To avoid memory leaks in JavaScript, you should be mindful of how you create and manage objects, avoid circular references, and use tools like memory profilers to identify and fix memory leaks in your code.


// what is the dynamic index in typescript that is used to access the object properties?
// ans = Dynamic index signatures in TypeScript allow you to define an index signature that can accept any property name and type. This allows you to access object properties dynamically using square bracket notation. Dynamic index signatures are useful when working with objects that have unknown or dynamic property names.
// example
// interface User {
//     [key: string]: string;
// }
// const user: User = {
//     name: 'John',
//     age: '30',
//     email:  'john at john.com'
// };
// console.log(user['name']); // John


// what are the two algothrithm that react build on?
// ans = React is built on two main algorithms: the Virtual DOM and Reconciliation. The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize rendering performance. Reconciliation is the process of updating the actual DOM to match the Virtual DOM efficiently. These algorithms help React to efficiently update and render changes to the user interface, resulting in a fast and responsive user experience.

// what is the lift state up in react?
// ans = Lifting state up in React is a pattern where you move the state from child components to their parent component. This allows you to share state between multiple components and keep the state in sync across the application. By lifting state up, you can create a single source of truth for the state and pass it down to child components as props.

// "[]" == "[]" // false

// what are the primitive types and union types in typescript?
// ans = In TypeScript, primitive types are basic data types like number, string, boolean, null, undefined, and symbol. Union types allow you to combine multiple types into a single type. You can use union types to define variables that can have multiple possible types. For example, you can define a variable that can be either a number or a string using a union type.

// how does Js handling memory ?
// ans = JavaScript uses automatic memory management through garbage collection to manage memory allocation and deallocation. The JavaScript engine allocates memory for objects and variables dynamically and automatically frees up memory when it is no longer needed. Garbage collection identifies and removes unused objects to prevent memory leaks and optimize memory usage.


// What are synthetic events in React ? and use?
// Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.

// React uses the event delegation technique to listen to events at the root level and then it delegates the responsibility of handling the events to the respective components. This is done to improve the performance of the application.