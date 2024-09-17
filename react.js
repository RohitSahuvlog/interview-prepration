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
// Have you ever encountered a problem with the MERN stack, and if so, how did you resolve it?
// Check out our tailor-made MERN Stack Developer Test, which can be customized to screen candidates before the interview.
// MERN Stack Developer Interview Questions for Experienced Developers
// Here is a list of MERN stack interview questions to thoroughly test candidates in a senior position:
// What is a stub in Node.js?
// Explain the concept of a thread pool. Which library handles it in Node.js?
// What are smart components and dumb components?
// What are the key features of NodeJS? What are its challenges?
// What is occasion circle in NodeJS?
// What do you understand by dependency injection? Why is it useful?
// State the IDEs that are used in the development of Node.js.
// What is REPL under Node.js? How does it work?
// What is the difference between linear search and binary search?
// What is the difference between Node.js, AJAX, and jQuery?
// What do you understand by containerization?
// What is a test pyramid? How do you actualize the test pyramid when examining HTTP APIs?
// What is the purpose of indexing in MongoDB?
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
// const array = [];
// setInterval(() => {
// for (let i = 0; i < 1000; i++) {
// array.push(new Array(1000).join('*'));
// }
// }, 1000);
// }
// createLeak();
// In this example, the createLeak function creates a memory leak by continuously pushing large arrays into the array variable without releasing them. This can lead to memory exhaustion and performance issues over time.
// releasing meaning that the memory is not being used anymore and can be freed up for other processes. In JavaScript, memory leaks can occur when objects are not properly dereferenced or when circular references prevent garbage collection from reclaiming memory. To avoid memory leaks in JavaScript, you should be mindful of how you create and manage objects, avoid circular references, and use tools like memory profilers to identify and fix memory leaks in your code.


// what is the dynamic index in typescript that is used to access the object properties?
// ans = Dynamic index signatures in TypeScript allow you to define an index signature that can accept any property name and type. This allows you to access object properties dynamically using square bracket notation. Dynamic index signatures are useful when working with objects that have unknown or dynamic property names.
// example
// interface User {
// [key: string]: string;
// }
// const user: User = {
// name: 'John',
// age: '30',
// email:'john at john.com'
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

// example: Sure! Synthetic events in React are like a helpful middleman between your code and the browser's built-in events. They make sure everything works the same way across different browsers, so you don't have to worry about browser-specific quirks.

// Why Use Synthetic Events ?
// Consistency : They make sure events behave the same way no matter which browser you're using.
// Performance: They are designed to be efficient, reusing event objects to save memory.
// Ease of Use: They provide a simple and uniform way to handle events in your React applications.

// React uses the event delegation technique to listen to events at the root level and then it delegates the responsibility of handling the events to the respective components. This is done to improve the performance of the application.




//2. Explain the difference between Real DOM and Virtual DOM ?
// ans = The Real DOM is the actual DOM that is rendered by the browser. It is a tree-like structure that represents the HTML elements of a web page. The Real DOM is slow and inefficient because any changes to the DOM trigger a reflow and repaint of the entire page.

// The Virtual DOM is a lightweight copy of the Real DOM that is maintained by React. It is a JavaScript representation of the Real DOM that React uses to optimize rendering performance. The Virtual DOM is fast and efficient because it allows React to batch updates and only update the parts of the DOM that have changed.


// 3. What are the key features of React ?
// ans = React is a JavaScript library for building user interfaces. It has several key features that make it popular among developers:

// Declarative: React allows you to create interactive UIs using a declarative syntax that makes the code more predictable and easier to debug.

// Component-Based: React uses a component-based architecture that allows you to break down the UI into reusable components. This makes it easier to build and maintain complex applications.

// Virtual DOM: React uses a Virtual DOM to optimize rendering performance by only updating the parts of the DOM that have changed. This results in faster rendering and a better user experience.

// JSX: React uses JSX, a syntax extension that allows you to write HTML-like code in JavaScript. JSX makes it easier to create and maintain UI components.

// One-Way Data Binding: React uses one-way data binding to ensure that the data flows in a single direction, from parent components to child components. This helps to maintain the integrity of the data and prevent side effects.

// React Hooks: React Hooks are functions that allow you to use state and other React features in functional components. Hooks provide a more concise and readable way to manage state and side effects in React applications.

// 4. What is JSX ?
// ans = JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript. JSX makes it easier to create and maintain UI components in React by combining the power of JavaScript and HTML. JSX is not a separate templating language, but a syntax extension that allows you to write XML-like code in JavaScript.

// 5. Why can't browsers read JSX ?
// ans = Browsers cannot read JSX directly because JSX is not valid JavaScript syntax. JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript. Browsers can only understand JavaScript, HTML, and CSS, so JSX code needs to be transpiled into plain JavaScript before it can be rendered in the browser.


// 6. What are React components ?
// ans = React components are the building blocks of a React application. They are reusable UI elements that encapsulate the logic and presentation of a part of the user interface. React components can be either functional components or class components. Functional components are simple functions that take props as an argument and return JSX, while class components are ES6 classes that extend from React.Component and can have state and lifecycle methods.
// remember key words : reusable UI elements, encapsulate the logic and presentation, functional components, class components, props, JSX, state, lifecycle methods.


// 7. Differentiate between a Class component and a Functional component.
// ans = Class components are ES6 classes that extend from React.Component and can have state and lifecycle methods. They are used for more complex components that require state management and lifecycle methods. Functional components are simple functions that take props as an argument and return JSX. They are used for presentational components that do not require state or lifecycle methods.

// remember key words : Class components, ES6 classes, React.Component, state, lifecycle methods, Functional components, simple functions, props, JSX, presentational components.


// 8. What is the difference between state and props in React ?
// ans = State and props are two key concepts in React that are used to manage data and pass data between components.

// State is a built-in feature of React that allows components to store and manage their own data. State is mutable and can be updated using the setState method. State is local to a component and can only be accessed and modified by that component.

// 9. What are React hooks ? Name some common hooks.
// ans = React hooks are functions that let you use state and other React features in functional components. Hooks provide a more concise and readable way to manage state and side effects in React applications. Some common hooks in React are useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, and useLayoutEffect.


// 10. How do useState and useEffect work in React ?
// ans = The useState hook is used to add state to functional components in React. It takes an initial state as an argument and returns an array with the current state value and a function to update the state. You can use the useState hook to manage local component state in functional components.


// The useEffect hook is used to perform side effects in functional components. It takes a callback function as an argument and runs the callback after the component has rendered. You can use the useEffect hook to fetch data, subscribe to events, and perform other side effects in functional components.

// 11. What is the importance of key in React ?
// ans = The key prop is a special attribute in React that is used to identify elements in a list. Keys help React identify which items have changed, are added, or are removed in a list. Keys should be unique within the same list and stable across re-renders to ensure proper reconciliation of the Virtual DOM.

// 12. Explain the concept of lifting state up in React.
// ans = Lifting state up in React is a pattern where you move the state from child components to their parent component. This allows you to share state between multiple components and keep the state in sync across the application. By lifting state up, you can create a single source of truth for the state and pass it down to child components as props.

// 13. How does one pass data between components in React ?
// ans = You can pass data between components in React using props, context, and state. Props are used to pass data from parent components to child components. Context allows you to share data between components without passing props manually. State is used to manage local component state and update the UI based on changes in data.

// 14. What are the new features introduced in React 18 ?
// ans = React 18 introduces several new features and improvements, including concurrent rendering, automatic batching, concurrent features, server-side rendering enhancements, and React Server Components. React 18 also includes new APIs like useTransition, startTransition, useDeferredValue, and improved Suspense for handling asynchronous data loading.


// 15. What is concurrent rendering in React 18 ?
// ans = Concurrent rendering is a new feature in React 18 that allows React to work on multiple tasks concurrently. It enables React to pause and resume rendering work to improve performance and responsiveness. Concurrent rendering helps to prioritize user interactions and ensure smooth and interactive user experiences in React applications.


// 16. How does automatic batching work in React 18 ?
// ans : Automatic batching is a new feature in React 18 that allows React to batch multiple state updates into a single render cycle. It automatically batches state updates that occur within the same event loop to reduce the number of re-renders and improve performance. Automatic batching helps to optimize rendering performance and reduce unnecessary updates in React applications.

// 17. What is the useTransition hook, and how does it work ?
// ans = The useTransition hook is a new feature in React 18 that allows you to control the loading state of asynchronous data in React applications. It returns a transition state that indicates whether the data is still loading or has been loaded. You can use the useTransition hook to show loading indicators and improve the user experience when fetching data asynchronously.

// 18. Explain the working of useDeferredValue in React 18.
// ans = The useDeferredValue hook is a new feature in React 18 that allows you to defer the rendering of non-critical data in React applications. It returns a deferred value that React can prioritize for rendering later. You can use the useDeferredValue hook to improve performance by deferring the rendering of less important data until after the critical data has been rendered.

// 19. What is Suspense in React, and how does it work ?
// ans = Suspense is a feature in React that allows components to suspend rendering while waiting for asynchronous data to load. Suspense helps to manage loading states and handle data fetching in React applications. It allows you to show loading indicators, error boundaries, and fallback UIs while fetching data asynchronously.

// 20. How has React 18 improved Suspense ?
// ans = React 18 has improved Suspense by introducing new features like useTransition, startTransition, and useDeferredValue. These features allow you to control the loading state of asynchronous data, defer rendering of non-critical data, and improve the user experience when fetching data in React applications. React 18 also includes enhancements to Suspense for server-side rendering and React Server Components.

// 21. What is the new startTransition function in React 18 ?
// ans = The startTransition function is a new feature in React 18 that allows you to start a transition to update the UI in React applications. It lets you defer rendering updates until after the transition has completed, improving performance and responsiveness. You can use the startTransition function to prioritize user interactions and ensure smooth and interactive user experiences in React applications.


// 22. What is the difference between useTransition and startTransition ?
// 23. How do you use the Concurrent Features introduced in React 18 ?
// 24. How does React 18 enhance server - side rendering(SSR) ?
// 25. What is React Server Components, and how does it work with React 18 ?
// 26. What role does the concurrentMode flag play in React 18 ?
// 27. Explain the React lifecycle methods in detail.
// 28. What is React Context API, and when would you use it ?
// 29. What are higher - order components(HOCs) in React ?
// 30. How does React handle forms and controlled components ?
// 31. What are uncontrolled components in React ?
// 32. What is Prop Drilling, and how can it be avoided ?
// 33. What are React Portals, and when should you use them ?
// 34. What is the significance of React’s shouldComponentUpdate method ?
// 35. What are Fragments in React ?
// 36. Explain the concept of memoization in React using React.memo and useMemo.
// 37. How do you optimize performance in a React application ?
// 38. What are the rules for using React Hooks ?
// 39. How do you handle errors in React using error boundaries ?
// 40. What is the componentDidCatch() method in React ?
// 41. What are synthetic events in React ?
// 42. How can you test a React component ?
// 43. What is the role of Jest in React testing ?
// 44. What is the difference between shallow rendering and full rendering in testing ?
// 45. How does one implement lazy loading in React ?
// 46. How can you test React hooks ?
// 47. How do you handle forms and validations in React ?
// 48. What is Redux, and how does it relate to React ?
// 49. What are the key principles of Redux ?
// 50. What are actions, reducers, and the store in Redux ?
// 51. What is the difference between useReducer and Redux ?
// 52. How does one connect Redux to a React component ?
// 53. What are React middlewares in Redux, and give examples ?
// 54. What are thunks in Redux ?
// 55. How do you handle asynchronous actions in Redux ?
// 56. Explain the differences between Redux, Context API, and MobX for state management.
// 57. What is React Router ?
// 58. How do you implement dynamic routing in React ?
// 59. What is the difference between BrowserRouter and HashRouter ?
// 60. What is the significance of Route and Switch in React Router ?
// 61. How do you pass parameters in React Router ?
// 1. What is React ?
// 2. Explain the difference between Real DOM and Virtual DOM ?
// 3. What are the key features of React ?
// 4. What is JSX ?
// 5. Why can't browsers read JSX ?
// 6. What are React components ?
// 7. Differentiate between a Class component and a Functional component.
// 8. What is the difference between state and props in React ?
// 9. What are React hooks ? Name some common hooks.
// 10. How do useState and useEffect work in React ?
// 11. What is the importance of key in React ?
// 12. Explain the concept of lifting state up in React.
// 13. How does one pass data between components in React ?
// 14. What are the new features introduced in React 18 ?
// 15. What is concurrent rendering in React 18 ?
// 16. How does automatic batching work in React 18 ?
// 17. What is the useTransition hook, and how does it work ?
// 18. Explain the working of useDeferredValue in React 18.
// 19. What is Suspense in React, and how does it work ?
// 20. How has React 18 improved Suspense ?
// 21. What is the new startTransition function in React 18 ?
// 22. What is the difference between useTransition and startTransition ?
// 23. How do you use the Concurrent Features introduced in React 18 ?
// 24. How does React 18 enhance server - side rendering(SSR) ?
// 25. What is React Server Components, and how does it work with React 18 ?
// 26. What role does the concurrentMode flag play in React 18 ?
// 27. Explain the React lifecycle methods in detail.
// 28. What is React Context API, and when would you use it ?
// 29. What are higher - order components(HOCs) in React ?
// 30. How does React handle forms and controlled components ?
// 31. What are uncontrolled components in React ?
// 32. What is Prop Drilling, and how can it be avoided ?
// 33. What are React Portals, and when should you use them ?
// 34. What is the significance of React’s shouldComponentUpdate method ?
// 35. What are Fragments in React ?
// 36. Explain the concept of memoization in React using React.memo and useMemo.
// 37. How do you optimize performance in a React application ?
// 38. What are the rules for using React Hooks ?
// 39. How do you handle errors in React using error boundaries ?
// 40. What is the componentDidCatch() method in React ?
// 41. What are synthetic events in React ?
// 42. How can you test a React component ?
// 43. What is the role of Jest in React testing ?
// 44. What is the difference between shallow rendering and full rendering in testing ?
// 45. How does one implement lazy loading in React ?
// 46. How can you test React hooks ?
// 47. How do you handle forms and validations in React ?
// 48. What is Redux, and how does it relate to React ?
// 49. What are the key principles of Redux ?
// 50. What are actions, reducers, and the store in Redux ?
// 51. What is the difference between useReducer and Redux ?
// 52. How does one connect Redux to a React component ?
// 53. What are React middlewares in Redux, and give examples ?
// 54. What are thunks in Redux ?
// 55. How do you handle asynchronous actions in Redux ?
// 56. Explain the differences between Redux, Context API, and MobX for state management.
// 57. What is React Router ?
// 58. How do you implement dynamic routing in React ?
// 59. What is the difference between BrowserRouter and HashRouter ?
// 60. What is the significance of Route and Switch in React Router ?
// 61. How do you pass parameters in React Router ?
// 62. What are nested routes in React Router ?




// 1. Program to find longest word in a given sentence ?
// 2. How to check whether a string is palindrome or not ?
// 3. Write a program to remove duplicates from an array ?
// 4. Program to find Reverse of a string without using built-in method ?
// 5. Find the max count of consecutive 1’s in an array ?
// 6. Find the factorial of given number
// 7. Given 2 arrays that are sorted[0, 3, 4, 31] and[4, 6, 30].Merge them and sort[0, 3, 4, 4, 6, 30, 31] ?
// 8. Create a function which will accepts two arrays arr1 and arr2.The function should return true if every value in arr1 has its corresponding value squared in array2.The frequency of values must be same.
//9. Given two strings.Find if one string can be formed by rearranging the letters of other string.
//10. Write logic to get unique objects from below array ?


// 1. What is JavaScript ?
//2. What are the data types supported by JavaScript ?
//3. What is the difference between`let`, `const`, and`var` ?
// 4. Explain how `==` and `===` differ.
// 5. What is a closure ?
//6. What is hoisting ?
//7. Explain the concept of "this" in JavaScript.
// 8. What are JavaScript prototypes ?
//9. What is the difference between `null` and`undefined` ?
//10. How does JavaScript handle asynchronous operations ?
// 11. What is a promise ?
//12. What are async / await functions ?
//13. Explain event delegation in JavaScript.
// 14. What are JavaScript modules ?
//15. How can you prevent a function from being called multiple times ?
//16. What is the event loop ?
// 17. What is the difference between `apply()` and `call()` methods ?
//18. What is `bind()` method used for?
//19. What is a JavaScript event loop ?
// 20. Explain the concept of "event bubbling" and "event capturing".
// 21. What is the difference between `deep copy` and`shallow copy` ?
//22. What are generator functions ?
//23. What is the `new` keyword used for?
// 24. How do JavaScript’s `setTimeout` and `setInterval` work ?
//25. What is a `WeakMap` and how is it different from a`Map` ?
//26. What is a`Set` in JavaScript ?
// 27. What is `Object.create()` used for?
//28. How does JavaScript’s garbage collection work ?
//29. What are "decorators" in JavaScript ?
// 30. Explain the difference between `prototype` and`__proto__`.
// 31. What is the purpose of`Object.assign()` ?
//32. What are "template literals" ?
//33. What is the `spread` operator ?
// 34. What is the `rest` parameter ?
//35. Explain the `for...of` loop.
// 36. What are `async` and `await` keywords used for?
//37. What is`Symbol` used for in JavaScript ?
//38. How do you create a class in JavaScript ?
// 39. What is destructuring in JavaScript ?
//40. What is the `Proxy` object ?

// 1. Fundamentals: Start with the basics - variables, data types, and operators.
// 2. Functions: Dive deep into functions, understanding scope, closures, and the 'this' keyword.
// 3. ES6 Features: Get comfortable with arrow functions, destructuring, spread / rest operators, and template literals.
// 4. Async JavaScript: Promises and async / await for handling asynchronous operations.
// 5. DOM Manipulation: Know how to interact with the Document Object Model(DOM) effectively.
// 6. Event Handling: Learn about event listeners, event delegation, and the event object.
// 7. Prototypes and Classes: Understand JavaScript's prototypal inheritance and ES6 classes.
// 8. Closures: Master this concept, as it's often tested in interviews.
// 9. Module Systems: Explore CommonJS, AMD, and ES6 modules.
// 10. AJAX and Fetch API: Learn how to make asynchronous HTTP requests.
// 11. Design Patterns: Know the most common patterns like Singleton, Observer, and Module.
// 12. JSON: Understand JSON parsing and stringify.
// 13. Error Handling: Learn how to handle errors gracefully with try...catch.
// 14. Data Structures: Arrays, objects, maps, and sets are essential.
// 15. Functional Programming: Concepts like map, filter, and reduce are valuable.
// 16. Build Tools: Grasp Webpack and Babel for bundling and transpiling.
// 17. Testing: Explore testing frameworks like Jest and Mocha.
// 18. Debugging: Proficiency with browser developer tools is a must.
// 19. ESLint and Code Style: Adhere to clean code practices.
// 20. Security: Understand common web security vulnerabilities(e.g., XSS, CSRF).
// 21. Promises and Async / Await: Master asynchronous programming.
// 22. Modern JavaScript Frameworks: Learn a popular framework like React, Angular, or Vue.js.
// 23. Working with APIs: Know how to integrate external APIs into your applications.
// 24. Documentation: Keep your code well - documented for clarity.
// 25. Automation: Grasp task runners like Grunt and Gulp.
// 26. Progressive Web Apps(PWAs): Understand PWA concepts and service workers.
// 27. Web Performance: Optimize your code for speed and efficiency.


// Program to find longest word in a given sentence ?
//2. How to check whether a string is palindrome or not ?
//3. Write a program to remove duplicates from an array ?
// 4. Program to find Reverse of a string without using built-in method ?
//5. Find the max count of consecutive 1’s in an array ?
//6. Find the factorial of given number ?
// 7. Given 2 arrays that are sorted[0, 3, 4, 31] and[4, 6, 30].Merge them and sort[0, 3, 4, 4, 6, 30, 31] ?
//8. Create a function which will accepts two arrays arr1 and arr2.The function should return true if every value in arr1 has its corresponding value squared in array2.The frequency of values must be same.
//9. Given two strings.Find if one string can be formed by rearranging the letters of other string.
//10. Write logic to get unique objects from below array ?
//I / P : [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];
// O / P: [{ name: "sai" }, { name: "Nang" }{ name: "111111" }
//11. Write a JavaScript program to find the maximum number in an array.
//12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//13. Write a JavaScript function to check if a given number is prime.
//14. Write a JavaScript program to find the largest element in a nested array.
//[[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
//16. Given a string, write a javascript function to count the occurrences of each character in the string.
//17. Write a javascript function that sorts an array of numbers in ascending order.
//18. Write a javascript function that sorts an array of numbers in descending order.
//19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
//20. Implement a javascript function that flattens a nested array into a single - dimensional array.




// 𝗖𝗼𝗿𝗲 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀
// 1. What are the key differences between React class components and functional components ?
//2. Explain the concept of state in React and how it differs from props.
// 3. What is the virtual DOM, and how does React use it to optimize rendering ?
// 4. How does React's reconciliation algorithm work?
// 5. What is a React hook, and how does it differ from a class component lifecycle method ?
// 6. Can you explain the use of the useEffect hook and give an example of its use ?
// 7. How do you manage side effects in a React application ?
// 8. What is the purpose of the useContext hook, and how do you use it ?

// 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗧𝗼𝗽𝗶𝗰𝘀
// 9. What is the purpose of useReducer, and how does it compare to useState ?
// 10. How does React handle context, and how can it be used to manage state across components ?
// 11. What is server - side rendering(SSR) in React, and what are its benefits ?
// 12. Explain React's Suspense and its role in data fetching and code splitting.
// 13. What is the purpose of React.memo, and how does it improve performance ?
// 14. How do you optimize performance in a React application ?

// 𝗥𝗲𝗮𝗰𝘁 𝗘𝗰𝗼𝘀𝘆𝘀𝘁𝗲𝗺
// 15. What is Redux, and how does it integrate with React for state management ?
// 16. Can you explain the difference between controlled and uncontrolled components in React ?
// 17. How does React Router work for routing in a React application ?
// 18. What are the benefits of using TypeScript with React, and how do you set it up ?

// 𝗧𝗲𝘀𝘁𝗶𝗻𝗴 𝗮𝗻𝗱 𝗗𝗲𝗯𝘂𝗴𝗴𝗶𝗻𝗴
// 19. What are some common tools and libraries for testing React components ?
// 20. How do you test a React component using Jest and React Testing Library?
// 21. What are some strategies for debugging React applications ?

// 𝗣𝗿𝗮𝗰𝘁𝗶𝗰𝗮𝗹 𝗔𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻
// 22. How do you handle forms and form validation in React ?
// 23. How do you handle error boundaries in React, and why are they important ?
// 24. What is the significance of keys in React lists, and how do they affect performance and rendering ?

// 1.What are the different data types in JavaScript ?
//2.Explain the concept of hoisting in JavaScript.
// 3.What is the difference between `==` and`===` in JavaScript ?
//4.What is a closure in JavaScript ?
//5.What is the difference between `function declaration` and`function expression` ?
// 6.What is the `this` keyword in JavaScript, and how does it work ?
//7. How do you clone an object in JavaScript ?
//8.What is the difference between `null` and`undefined` ?
// 9.Explain the concept of prototypal inheritance.
// 10.What is the difference between `setTimeout()` and`setInterval()` ?
//11.What is a Promise, and how does it work ?
//12.What is async / await and how does it simplify working with Promises ?
// 13.What is the event loop in JavaScript ?
//14.Explain the concept of debouncing and throttling.


// 1. What is React ?
//2. What is useMemo ?
//3. What are the features of React ?
// 4. What is JSX ?
//5. What is DOM ?
//6. What is Virtual Dom ?
// 7. What is component life cycle of React class component ?
// 8. What are fragments in react ?
//9. What are props in react ?
//10. What are synthetic events in react ?
// 11. What are the difference between Package.json and Package.lock.json ?
//12. What are the differences between client side and server side rendering ?
//13. What is state in Reactjs ?
// 14. What are props ?
//15. What are the differences between State and Props in react ?
//16. What is props drilling ?
// 17. What are the disadvantages of props drilling and How we can avoid props drilling ?
//18. What are Pure components in React ?
//19. Whatare Ref’s in React ?
// 20. What is meant by forward ref ?
//21. What are Error boundaries ?
//22. What are Higher order components in react ?
// 23. What are the differences between controlled and uncontrolled components ?
//24. What is useCallback ?
//25. What are the differences between useMemo and useCallback ?
// 26. What are keys in React ?
//27. What is Lazy loading in React ?
//28. What is suspense in React ?
// 29. What are custom hooks ?
//30. What is useReducer hook ?
//31. What are Portals in react ?
// 32. What is context in react ?
//33. Practical question: Give an example of context api usage ?
//34. What is the purpose of callback function as an argument of setState() ?
// 35. Practical question: create a custom hook for increment / decrement counter ?
//36. Which lifecycle hooks in class component are replaced with useEffect in functional components ?
//37. What is Strict mode in react ?
// 38. What are the different ways to pass data from child component to parent component in react ?
//39. Practical question: How to send data from child to parent using callback functions ?
// 40. Practical question: How to send the data from child component to parent using useRef ?
// 41. How do you optimize your react application ?
//42. How would you consume a RESTful JSON API in reactjs ?
//43.different design patterns used in react ?
// 44. context api vs redux
// 45. prop types in react(How to apply validation on props in react)
// 46. What are React Mixins ?
//47. what are the different hooks you have used ?
//48. What are render props in react ?
// 49. What are the different types of exports and imports ?
//50. What are the differences between create element vs clone element in react ?
//51. When to use useState and useReducer ?
// 52. What is flushSync in react ?
//53. What are protected routes in react ?
//54. What is react - routerhas context menu

// 1. Explain the differences between == and ===.
//2. What is event delegation, and how does it function in JavaScript ?
// 3. Can you provide an illustration of how ES6 has altered the approach to working with "this" in JavaScript ?
// 4. Explain the concept of prototypal inheritance.
//5. Differentiate between a variable that is null, undefined, or undeclared.
//6. Define what a closure is and describe its uses and advantages.
//7. Explain the primary distinction between the Array.forEach() loop and Array.map() method, as well as when to choose one over the other.
//8. What is a common scenario for employing anonymous functions ?
// 9. Distinguish between host objects and native objects.
//10. Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'
// 11. Can you elucidate the purposes of Function.call and Function.apply, along with their notable differences ?
// 12. Describe the Function.prototype.bind method.
//13. Explain the differences between feature detection, feature inference, and utilizing the User Agent(UA) string.
//14. Define the concept of "hoisting."
// 15. What is type coercion, and what are some common pitfalls associated with relying on it in JavaScript code ?
// 16. Describe event bubbling and event capturing.
//17. What distinguishes an "attribute" from a "property" ?
// 18. List the advantages and disadvantages of extending built -in JavaScript objects.
//19. Discuss the same - origin policy's implications for JavaScript.
// 20. Why is it referred to as a "Ternary operator," and what does the term "Ternary" signify ?
// 21. Define strict mode and outline some of its advantages and disadvantages.
//22. Analyze the pros and cons of writing JavaScript code in a language that compiles to JavaScript.
//23. What tools and techniques do you employ for debugging JavaScript code ?
// 24. Enumerate the benefits and drawbacks of immutability and explain how you can achieve it in your code.
//25. Differentiate between synchronous and asynchronous functions and elucidate the event loop.
//26. Explain the disparities between variables created using let, var, or const.
// 27. Compare ES6 classes and ES5 function constructors, and furnish a use case for the arrow(=> ) function syntax.
//28. Describe the advantages of using the arrow syntax for methods in constructors.
//29. Define a higher - order function and provide an example of object or array destructuring.
//30. Give an example of generating a string using ES6 Template Literals and explain their benefits.
// 31. Provide an example of a curry function and clarify why this syntax can be advantageous.
//32. Discuss the benefits of using spread syntax and differentiate it from rest syntax.
// 33. Explain how code sharing between files can be accomplished.
//34. Define what a promise is and describe its applications.

// 1. What is the DOM, and how does it relate to HTML ?
// 2. How can you access elements in the DOM using JavaScript?
// 3. Explain the differences between getElementById, getElementsByClassName, and getElementsByTagName.
// 4. What is the purpose of the querySelector method, and how does it differ from querySelectorAll ?
// 5. Explain the concept of event bubbling and how it impacts event handling in the DOM.
// 6. How do you stop event propagation in the DOM ?
// 7. What is event delegation, and why is it useful in DOM manipulation ?
// 8. How can you dynamically create HTML elements using JavaScript?
// 9. Explain the differences between the textContent and innerHTML properties.
// 10. How can you modify CSS properties of an element in the DOM using JavaScript?
// 11. Explain the purpose of the setAttribute and getAttribute methods in DOM manipulation.
// 12. What is the difference between appendChild and insertBefore methods for adding elements to the DOM ?
// 13. How do you remove elements from the DOM using JavaScript?
// 14. What is the purpose of the parentNode property in DOM manipulation ?
// 15. Explain how to clone an element in the DOM using JavaScript.
// 16. How do you check if an element exists in the DOM using JavaScript?
// 17. What is the purpose of the classList property, and how can you use it to manipulate classes ?
// 18. How do you add and remove classes from an element in the DOM ?
// 19. Explain the differences between classList.add, classList.remove, and classList.toggle.
// 20. How can you traverse the DOM tree using JavaScript?
// 21. What are data attributes(data -*), and how can you use them in DOM manipulation ?
// 22. Explain the purpose of the style property in DOM manipulation.
// 23. How can you retrieve the dimensions(width and height) of an element in the DOM ?
// 24. What is the purpose of the offset properties(offsetWidth, offsetHeight, offsetLeft, offsetTop) in DOM manipulation ?
// 25. How do you handle form manipulation in the DOM using JavaScript?
// 26. Explain the differences between innerText, textContent, and innerHTML.
// 27. How do you detect if an element is hidden or visible in the DOM ?
// 28. What are the differences between the client and offset properties in DOM manipulation ?
// 29. How can you handle scroll events in the DOM using JavaScript?
// 30. Explain the differences between createDocumentFragment and createElement in DOM manipulation.
