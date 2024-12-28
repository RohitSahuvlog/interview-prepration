// How does React work?
// ans = React is a JavaScript library that is used to build user interfaces. It is used for handling the view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

// 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗧𝘆𝗽𝗲𝗦𝗰𝗿𝗶𝗽𝘁 ??
//  TypeScript is a 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝘁𝗼𝗼𝗹 created by Microsoft that builds on top of 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁.JavaScript is dynamically typed, which can lead to runtime errors that are hard to resolve.TypeScript introduces 𝘀𝘁𝗮𝘁𝗶𝗰 𝘁𝘆𝗽𝗶𝗻𝗴 and other features to help developers catch errors during development.
// Since browsers can't run TypeScript directly, it is 𝘁𝗿𝗮𝗻𝘀𝗽𝗶𝗹𝗲𝗱 to JavaScript, so we still have full compatibility with JavaScript environments.

// what is hoisting in javascript
// ans = Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. This means that you can use a variable or function before it has been declared. However, only the declarations are hoisted, not the initializations.

// what is closure in javascript
// ans = A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


// what is lambda function
// ans =In JavaScript, a lambda function is known as an arrow function. Arrow functions provide a shorter syntax for writing functions and also have lexical this binding, which can be very useful.

// what is uninary function
// ans = A unary function is a function that takes a single argument. It is a type of function that operates on a single input and produces a single output. Unary functions are commonly used in mathematics and computer science to perform simple operations on data.

// what is binary function
// ans = A binary function is a function that takes two arguments. It is a type of function that operates on two inputs and produces a single output. Binary functions are commonly used in mathematics and computer science to perform operations on pairs of data.

// what is currried function
// ans = A curried function is a function that takes multiple arguments one at a time. Instead of taking all arguments at once, a curried function returns a new function for each argument until all arguments have been provided. This allows for partial application of functions, where some arguments are fixed, and the resulting function can be called with the remaining arguments later.

// Currying transforms a function with multiple arguments into a series of nested functions, each taking a single argument.This concept originates from lambda calculus and functional programming.



// example lambda function
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

// const numbers = [1, 2, 3, 4];
// delete numbers[2];
// console.log(numbers)// Output: [1, 2, undefined, 4]
// console.log(numbers.length);

// var x = 10;
// delete x// false

// let y = 20;
// delete y// false

// z = 30// Implicit global variable
// delete z// true

// What are React Hooks?
// ans = React Hooks are functions that let developers "hook into" React state and lifecycle features from function components. They let you use state and other React features without writing a class. You can also create your own Hooks to reuse stateful behavior between different components.

// What are props in React?
// ans = Props are inputs to a React component. They are data passed down from a parent component to a child component. Props are read-only and help you to create dynamic and interactive React applications. You can pass props to functional components or class components. You can also pass props to components using JSX.


// differnce between libraries and framework?
// ans = A library is a collection of pre-written code that you can use in your own projects. A framework is a set of rules and guidelines that help you build your project. A library is a tool that you can use to build your project, while a framework is a structure that you can use to organize your project.


// What are the advantages of ReactJS?
// ans = ReactJS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.

// How is React different from Angular JS?
// ans = React is a JavaScript library for building user interfaces, while Angular is a JavaScript framework for building web applications. React is focused on the view layer, while Angular provides a complete framework for building web applications. React uses a virtual DOM, while Angular uses a regular DOM. React is developed and maintained by Facebook, while Angular is developed and maintained by Google.

// a- main
a - secondy

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

  // "[]" == "[]" // true
  // [] == [] // false




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


  // 3.What are the key features of React?
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

  // import { startTransition } from 'react';

  // startTransition(() => {
  / // Update state or perform an operation that can be deferred
// });


// 22. What is the difference between useTransition and startTransition ?
// ans = The useTransition hook and startTransition function are new features in React 18 that allow you to control the loading state of asynchronous data and defer rendering updates in React applications.

// The useTransition hook returns a transition state that indicates whether the data is still loading or has been loaded. It allows you to show loading indicators and improve the user experience when fetching data asynchronously.

// The startTransition function allows you to start a transition to update the UI in React applications. It lets you defer rendering updates until after the transition has completed, improving performance and responsiveness. You can use the startTransition function to prioritize user interactions and ensure smooth and interactive user experiences in React applications.


// 23. How do you use the Concurrent Features introduced in React 18 ?
// ans = To use the concurrent features introduced in React 18, you can update your React application to the latest version of React and start using the new APIs and hooks like useTransition, startTransition, useDeferredValue, and improved Suspense. You can use these features to control the loading state of asynchronous data, defer rendering updates, and improve the user experience in React applications.

// import { useTransition, startTransition, useDeferredValue } from 'react';

// const [isPending, startTransition] = useTransition();
// const deferredValue = useDeferredValue(data);

// 24. How does React 18 enhance server - side rendering(SSR) ?
// ans = React 18 enhances server-side rendering (SSR) by improving the performance and scalability of React applications. It introduces new features like React Server Components and improved Suspense for server-side rendering. These features allow you to render components on the server and deliver faster and more interactive user experiences in React applications.

// remember keys words : server-side rendering, performance, scalability, React Server Components, improved Suspense, faster, interactive user experiences.


// 25. What is React Server Components, and how does it work with React 18 ?
// ans = React Server Components are a new feature in React 18 that allows you to render components on the server and send only the necessary data to the client. Server Components help to improve performance and reduce the amount of data sent over the network by rendering components on the server and hydrating them on the client. This allows you to deliver faster and more interactive user experiences in React applications.

// remember key words : React Server Components, render components on the server, reduce data sent over the network, hydrate components on the client, faster, interactive user experiences.

// 26. What role does the concurrentMode flag play in React 18 ?
// ans = The concurrentMode flag is a new feature in React 18 that allows you to enable concurrent rendering in React applications. It enables React to work on multiple tasks concurrently and prioritize user interactions to ensure smooth and interactive user experiences. The concurrentMode flag helps to improve performance and responsiveness in React applications.

// remember key words : concurrentMode flag, enable concurrent rendering, multiple tasks concurrently, prioritize user interactions, smooth, interactive user experiences.

// 27. Explain the React lifecycle methods in detail.
// ans = React lifecycle methods are special methods that are called at different stages of a component's life cycle. They allow you to perform actions like initializing state, updating the UI, and cleaning up resources. The React lifecycle methods include:

// constructor: The constructor method is called when a component is initialized and allows you to set the initial state and bind event handlers.

// componentDidMount: The componentDidMount method is called after a component has been rendered to the DOM and allows you to perform side effects like data fetching and subscriptions.

// componentDidUpdate: The componentDidUpdate method is called after a component has been updated and allows you to perform side effects when the component re-renders.

// componentWillUnmount: The componentWillUnmount method is called before a component is removed from the DOM and allows you to clean up resources like event listeners and subscriptions.

// shouldComponentUpdate: The shouldComponentUpdate method is called before a component re-renders and allows you to control whether the component should update based on the new props and state.

// render: The render method is called to render the component's UI and returns the JSX that will be displayed on the screen.

// remember key words : React lifecycle methods, component's life cycle, constructor, componentDidMount, componentDidUpdate, componentWillUnmount, shouldComponentUpdate, render.

// 28. What is React Context API, and when would you use it ?
// ans = The React Context API is a feature in React that allows you to share data between components without passing props manually. It provides a way to pass data through the component tree without having to pass props down manually at every level. You can use the Context API to manage global state, theme settings, and user preferences in React applications.

// remember key words : React Context API, share data between components, pass data through the component tree, manage global state, theme settings, user preferences.

// 29. What are higher - order components(HOCs) in React ?
// ans = Higher-Order Components (HOCs) are a pattern in React that allows you to reuse component logic. HOCs are custom functions that accept a component as an argument and return a new component with additional props or behavior. They are a way to share reusable code between components and enhance the functionality of existing components.

// 30. How does React handle forms and controlled components ?
// ans = React handles forms using controlled components, which are components that manage the form data through state. Controlled components use the value prop to control the input fields and update the state based on user input. This allows you to access and manipulate the form data in React components.

// 31. What are uncontrolled components in React ?
// ans = Uncontrolled components are components that manage their own state internally and do not rely on React state management. They use the ref attribute to access the form data directly from the DOM. Uncontrolled components are useful for simple forms and can be more performant than controlled components in certain cases.


// 32. What is Prop Drilling, and how can it be avoided ?
// ans = Prop Drilling is a pattern in React where you pass props down multiple levels of the component tree to access them in nested components. Prop Drilling can lead to complex and hard-to-maintain code. You can avoid Prop Drilling by using React Context API, higher-order components, or custom hooks to share data between components without passing props manually.

// 33. What are React Portals, and when should you use them ?
// ans = React Portals are a feature in React that allows you to render children into a different part of the DOM. Portals provide a way to render components outside the parent component's DOM hierarchy. You can use Portals to render modal dialogs, tooltips, and other UI elements that need to break out of the parent component's layout.


// 34. What is the significance of React’s shouldComponentUpdate method ?
// ans = The shouldComponentUpdate method is a lifecycle method in React that allows you to control whether a component should re-render based on the new props and state. It returns a boolean value that indicates whether the component should update. You can use the shouldComponentUpdate method to optimize rendering performance by preventing unnecessary re-renders in React components.

// 35. What are Fragments in React ?
// ans = Fragments are a feature in React that allows you to group multiple elements without adding extra nodes to the DOM. Fragments are a way to return multiple elements from a component without wrapping them in a parent element. They help to keep the DOM structure clean and avoid unnecessary div wrappers in React components.

// 36. Explain the concept of memoization in React using React.memo and useMemo.
// ans = Memoization is a technique in React that allows you to optimize the performance of functional components by caching the results of expensive computations. React.memo is a higher-order component that memoizes the output of a functional component based on its props. useMemo is a hook that memoizes the result of a function or computation and reuses the cached value when the dependencies have not changed.

// remember key words : Memoization, optimize performance, caching results, React.memo, useMemo.


// 37. How do you optimize performance in a React application ?
// ans = You can optimize performance in a React application by using techniques like code splitting, lazy loading, server-side rendering, caching, and optimizing images and assets. You can also minify and bundle your code, reduce the number of HTTP requests, and use a content delivery network (CDN) to improve loading times.

// 38. What are the rules for using React Hooks ?
// ans = React Hooks have several rules that you should follow to ensure they work correctly:

// Only call Hooks at the top level of a functional component.
// Only call Hooks from React function components or custom Hooks.
// Only call Hooks from within the body of a function component, not from nested functions or conditionals.
// Only call Hooks from the same component every time you render it.
// Only call Hooks from custom Hooks, not regular functions.
// Remember to follow the rules of Hooks to avoid issues like stale closures and unexpected behavior in your React components.


// 39. How do you handle errors in React using error boundaries ?
// ans = Error boundaries are a feature in React that allows you to catch JavaScript errors in components and handle them gracefully. You can use error boundaries to display fallback UIs, log errors, and prevent the entire application from crashing. Error boundaries help to improve the user experience and make your React applications more robust and reliable.

// 40. What is the componentDidCatch() method in React ?
// ans = The componentDidCatch() method is a lifecycle method in React that allows you to catch JavaScript errors in components and handle them gracefully. It is called when an error occurs during rendering, in lifecycle methods, or in the constructor of a component. You can use componentDidCatch() to display fallback UIs, log errors, and prevent the entire application from crashing.

// 41. What are synthetic events in React ?
// ans = Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.

// 42. How can you test a React component ?
// ans = You can test a React component using tools like Jest, React Testing Library, and Enzyme. You can write unit tests, integration tests, and end-to-end tests to ensure that your components work as expected. You can test the component's rendering, behavior, and interactions with other components to validate its functionality.

// 43. What is the role of Jest in React testing ?
// ans = Jest is a popular testing framework for JavaScript that is commonly used to test React components. Jest provides a simple and powerful way to write tests for React applications. It includes features like test runners, matchers, and spies to help you write and run tests efficiently. Jest is often used in combination with other testing libraries like React Testing Library and Enzyme to test React components.

// 44. What is the difference between shallow rendering and full rendering in testing ?
// ans = Shallow rendering and full rendering are two different approaches to testing React components.

// Shallow rendering: Shallow rendering is a testing technique that renders only the component being tested and does not render its child components. It allows you to isolate the component under test and focus on its behavior without rendering the entire component tree.

// Full rendering: Full rendering is a testing technique that renders the entire component tree, including all child components. It allows you to test the component in a more realistic environment and verify its interactions with other components. Full rendering is useful for testing the integration of components and their behavior in the context of the entire application.

// 45. How does one implement lazy loading in React ?
// ans = Lazy loading is a technique in React that allows you to load components asynchronously when they are needed. You can implement lazy loading using React.lazy and Suspense to dynamically import components and show loading indicators while the components are being loaded. Lazy loading helps to improve the performance of React applications by reducing the initial bundle size and loading time.


// 46. How can you test React hooks ?
// ans = You can test React hooks using tools like Jest and React Testing Library. You can write unit tests to test the behavior of hooks like useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, and useLayoutEffect. You can simulate different scenarios and test the hook's functionality, side effects, and interactions with other components.



// 47. How do you handle forms and validations in React ?
// ans = You can handle forms and validations in React using controlled components, form state management, and form libraries like Formik and React Hook Form. You can use the useState hook to manage form data and the onChange event to update the form state. You can also use form validation libraries like Yup and Joi to validate form data and display error messages to users.

// 48. What is Redux, and how does it relate to React ?
// ans = Redux is a state management library for JavaScript applications that allows you to manage the state of your application in a predictable and centralized way. Redux is often used with React to manage the global state of a React application and share data between components. Redux provides a single source of truth for the application state and allows you to update the state using actions and reducers.

// remember key words : Redux, state management library, JavaScript applications, predictable, centralized, global state, single source of truth, actions, reducers.

// 49. What are the key principles of Redux ?
// ans = The key principles of Redux are:

// Single source of truth: Redux stores the entire state of the application in a single object tree, making it easy to manage and update the state.

// State is read-only: The state in Redux is immutable and can only be changed by dispatching actions that describe the state changes.

// Changes are made with pure functions: Reducers in Redux are pure functions that take the current state and an action as arguments and return the new state based on the action.

// remember key words : Redux, single source of truth, state is read-only, immutable, pure functions, reducers.

// 50. What are actions, reducers, and the store in Redux ?
// ans = Actions, reducers, and the store are key concepts in Redux that are used to manage the state of a React application.

// Actions: Actions are plain JavaScript objects that describe the state changes in the application. They have a type property that describes the type of action and can include additional data to update the state.

// Reducers: Reducers are pure functions that take the current state and an action as arguments and return the new state based on the action. Reducers are responsible for updating the state in response to actions.

// Store: The store is an object that holds the application state and provides methods to update the state using actions and reducers. The store is created using the createStore function from the Redux library and is the single source of truth for the application state.

// remember key words : Actions, reducers, store, Redux, state changes, type property, pure functions, current state, new state, createStore.

// 51. What is the difference between useReducer and Redux ?
// ans = useReducer is a hook in React that allows you to manage state in functional components using reducers. It is similar to Redux in that it uses reducers to update the state based on actions. However, useReducer is local to a component and does not provide the global state management and middleware features of Redux. Redux is a state management library that provides a centralized store, actions, reducers, and middleware to manage the state of a React application.

// remember key words : useReducer, Redux, state management, functional components, reducers, global state, middleware.
// 52. How does one connect Redux to a React component ?
// ans = You can connect Redux to a React component using the connect function from the react-redux library. The connect function allows you to map the state and dispatch functions from the Redux store to the props of a React component. You can use the connect function to access the state and dispatch actions in a connected component.


// 53. What are React middlewares in Redux, and give examples ?
// ans = Middlewares in Redux are functions that intercept and process actions before they reach the reducers. Middlewares provide a way to add custom logic, side effects, and asynchronous behavior to Redux applications. Some common examples of middlewares in Redux are redux-thunk, redux-saga, and redux-logger.


// 54. What are thunks in Redux ?
// ans = Thunks are a type of middleware in Redux that allows you to write asynchronous logic in Redux applications. Thunks are functions that return another function, which can dispatch actions and access the Redux store. Thunks are commonly used to handle asynchronous actions like fetching data from an API and updating the state in Redux applications.

// remember key words : Thunks, middleware, asynchronous logic, dispatch actions, Redux store, fetching data, updating state.

// 55. How do you handle asynchronous actions in Redux ?

// ans = You can handle asynchronous actions in Redux using thunks, sagas, or observables. Thunks are a type of middleware that allows you to write asynchronous logic in Redux applications. Sagas are another middleware that uses generator functions to handle side effects and asynchronous actions. Observables are a type of middleware that uses RxJS observables to handle asynchronous actions in Redux applications.

// remember key words : asynchronous actions, Redux, thunks, sagas, observables.

// 56. Explain the differences between Redux, Context API, and MobX for state management.
// ans = Redux, Context API, and MobX are three popular state management solutions in React that provide different approaches to managing the state of a React application.

// Redux is a state management library that provides a centralized store, actions, reducers, and middleware to manage the state of a React application. Redux is commonly used for complex applications that require global state management and predictable state updates.

// Context API is a feature in React that allows you to share data between components without passing props manually. Context API provides a way to pass data through the component tree without having to pass props down manually at every level. Context API is useful for managing global state, theme settings, and user preferences in React applications.

// MobX is a state management library that uses observables and reactions to manage the state of a React application. MobX allows you to create observable data structures that automatically update the UI when the data changes. MobX is commonly used for applications that require reactive and scalable state management.

// remember key words : Redux, Context API, MobX, state management, centralized store, actions, reducers, middleware, global state, predictable state updates, observables, reactions, reactive, scalable.


// 57. What is React Router ?
// ans = React Router is a popular routing library for React that allows you to create dynamic and declarative routing in React applications. React Router provides components like BrowserRouter, Route, Link, and Switch to handle routing and navigation in React applications. It allows you to define routes, nested routes, and dynamic routes in a declarative way.

// 58. How do you implement dynamic routing in React ?
// ans = You can implement dynamic routing in React using React Router. Dynamic routing allows you to define routes that change based on the URL parameters or other conditions. You can use the Route component from React Router to define dynamic routes and access the route parameters using the useParams hook. Dynamic routing allows you to create flexible and interactive navigation in React applications.

// example :
// import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

// const App = () => {
/ return (
  / <Router>
    / <Switch>
      /           <Route path="/users/:id" component={UserDetails} />
//             </Switch>
//         </Router>

// 59. What is the difference between BrowserRouter and HashRouter ?
// ans = BrowserRouter and HashRouter are two types of routers provided by React Router for handling routing in React applications.

// BrowserRouter uses the HTML5 history API to create clean URLs without the hash symbol (#). It is recommended for modern browsers and server-side rendering.

// HashRouter uses the hash portion of the URL to create routes. It is recommended for older browsers that do not support the HTML5 history API and for static websites.

// 60. What is the significance of Route and Switch in React Router ?
// ans = Route and Switch are two components provided by React Router for defining routes and handling navigation in React applications.

// Route is used to define a route in a React application. It takes a path prop that specifies the URL path and a component prop that specifies the component to render when the path matches.

// Switch is used to group Route components and ensure that only one Route is rendered at a time. It renders the first Route that matches the current URL path and ignores the rest. Switch helps to prevent multiple routes from rendering simultaneously and ensures that only one route is active at a time.

// 61. How do you pass parameters in React Router ?
// ans = You can pass parameters in React Router using route parameters, query parameters, or state. Route parameters are defined in the URL path and accessed using the useParams hook. Query parameters are defined as key-value pairs in the URL query string and accessed using the useLocation hook. State can be passed as an object to the history.push method to navigate to a new route with state data.


//7. Explain the concept of "this" in JavaScript.
// ans = The "this" keyword in JavaScript refers to the object that is currently executing the code. It is a special keyword that is used to access the current object's properties and methods. The value of "this" depends on how a function is called and can vary based on the context in which it is used.

// remember key words : "this" keyword, object, executing code, properties, methods, function, context.

// 8. What are JavaScript prototypes ?
// ans = JavaScript prototypes are a mechanism that allows objects to inherit properties and methods from other objects. Prototypes are used to create a chain of objects that share common properties and methods. When you access a property or method on an object, JavaScript looks up the prototype chain to find the property or method on the object's prototype.

// remember key words : JavaScript prototypes, inherit, properties, methods, chain of objects, common properties, prototype chain.

//9. What is the difference between `null` and`undefined` ?
// ans = The `null` and `undefined` are two primitive data types in JavaScript that represent the absence of a value.

//10. How does JavaScript handle asynchronous operations ?
// ans = JavaScript handles asynchronous operations using callbacks, promises, async/await, and event loops. Asynchronous operations allow JavaScript to perform tasks like fetching data from a server, handling user input, and updating the UI without blocking the main thread. JavaScript uses event loops to manage asynchronous tasks and ensure that the application remains responsive and performant.

// 11. What is a promise ?
// ans = A promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation. Promises are used to handle asynchronous tasks like fetching data from a server, reading files, and handling user input. Promises have three states: pending, fulfilled, and rejected, and can be chained together to handle multiple asynchronous operations.

//13. Explain event delegation in JavaScript.
// ans = Event delegation is a technique in JavaScript that allows you to attach a single event listener to a parent element to handle events for multiple child elements. Instead of attaching event listeners to each individual child element, you can use event delegation to listen for events on the parent element and handle them based on the target element. Event delegation helps to reduce the number of event listeners and improve performance in JavaScript applications.

// 14. What are JavaScript modules ?
// ans = JavaScript modules are a way to organize and structure code in JavaScript applications. Modules allow you to split your code into separate files and import/export functionality between them. JavaScript modules help to improve code organization, reusability, and maintainability in large applications.

//15. How can you prevent a function from being called multiple times ?
// ans = You can prevent a function from being called multiple times by using debouncing or throttling techniques. Debouncing delays the execution of a function until a certain amount of time has passed without the function being called again. Throttling limits the rate at which a function can be called to prevent it from being called too frequently. These techniques help to optimize performance and prevent unnecessary function calls in JavaScript applications.

//16. What is the event loop ?
// ans = The event loop is a mechanism in JavaScript that allows the runtime environment to handle asynchronous tasks and events. The event loop continuously checks the call stack and the task queue to determine which tasks to execute next. It ensures that the application remains responsive and performs efficiently by managing the execution of asynchronous tasks and events.

// 17. What is the difference between `apply()` and `call()` methods ?
// ans = The `apply()` and `call()` methods are used to call a function with a specified `this` value and arguments.

//18. What is `bind()` method used for?
// ans = The `bind()` method in JavaScript is used to create a new function with a specified `this` value and arguments. It allows you to bind a function to a specific object and set the `this` value for the function. The `bind()` method returns a new function that can be called with the specified `this` value and arguments.


// 21. What is the difference between `deep copy` and`shallow copy` ?
// ans = The `deep copy` and `shallow copy` are two ways to copy objects in JavaScript.

// Deep copy: A deep copy creates a new object with copies of the original object's properties and nested objects. It creates a separate copy of the object and its nested objects, so changes to the original object do not affect the copied object.

// Shallow copy: A shallow copy creates a new object with copies of the original object's properties. It creates a new object with copies of the original object's properties, but does not create copies of nested objects. Changes to the original object's properties will affect the copied object, but changes to nested objects will affect both the original and copied objects.

//22. What are generator functions ?

//23. What is the `new` keyword used for?
// ans = The `new` keyword in JavaScript is used to create an instance of a constructor function or a class. It creates a new object and sets the `this` value to the new object. The `new` keyword allows you to create new instances of objects and classes in JavaScript.

// 24. How do JavaScript’s `setTimeout` and `setInterval` work ?

//25. What is a `WeakMap` and how is it different from a`Map` ?
//26. What is a `Set` in JavaScript?

// 27. What is `Object.create()` used for?
// ans = The `Object.create()` method in JavaScript is used to create a new object with a specified prototype object. It allows you to create an object that inherits properties and methods from another object. The `Object.create()` method takes a prototype object as an argument and returns a new object with the specified prototype.


//28. How does JavaScript’s garbage collection work?

//29. What are "decorators" in JavaScript ?

// 30. Explain the difference between `prototype` and`__proto__`.
// prototype is a property of a function that points to an object. It is used to add properties and methods to all instances of the function's objects. __proto__ is a property of an object that points to its prototype object. It is used to access the prototype of an object and inherit properties and methods from the prototype object.

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
// The Proxy object in JavaScript is a powerful feature introduced in ECMAScript 6(ES6) that allows you to create a proxy for another object, enabling you to intercept and redefine fundamental operations for that object.These operations include property access, assignment, enumeration, function invocation, and more.

// A Proxy is created with two parameters:

// target: The original object that you want to proxy.
// handler: An object containing traps(methods) that intercept operations on the target object.
// const target = {
//     message1: "hello",
//     message2: "everyone"
// };

// const handler = {
//     get: function (obj, prop) {
//         return prop in obj ? obj[prop] : "default";
//     }
// };

// const proxy = new Proxy(target, handler);

// console.log(proxy.message1); // Output: hello
// console.log(proxy.message2); // Output: everyone
// console.log(proxy.nonExistentProp); // Output: defaul

//13. Write a JavaScript function to check if a given number is prime.
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
//


// 𝗖𝗼𝗿𝗲 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀
// 1. What are the key differences between React class components and functional components ?
// 2. Explain the concept of state in React and how it differs from props.
// 3. What is the virtual DOM, and how does React use it to optimize rendering ?
// 4. How does React's reconciliation algorithm work?
// 5. What is a React hook, and how does it differ from a class component lifecycle method ?
// 6. Can you explain the use of the useEffect hook and give an example of its use ?
// 7. How do you manage side effects in a React application ?
// 8. What is the purpose of the useContext hook, and how do you use it ?

// 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗧𝗼𝗽𝗶𝗰𝘀
// 9. What is the purpose of useReducer, and how does it compare to useState ?
// 10. How does React handle context, and how can it be used to manage state across components ?
// 11. What is server-side rendering(SSR) in React, and what are its benefits ?
// 12. Explain React's Suspense and its role in data fetching and code splitting.
// 13. What is the purpose of React.memo, and how does it improve performance ?

// 𝗥𝗲𝗮𝗰𝘁 𝗘𝗰𝗼𝘀𝘆𝘀𝘁𝗲𝗺
// 15. What is Redux, and how does it integrate with React for state management ?
// 18. What are the benefits of using TypeScript with React, and how do you set it up ?

// 𝗧𝗲𝘀𝘁𝗶𝗻𝗴 𝗮𝗻𝗱 𝗗𝗲𝗯𝘂𝗴𝗴𝗶𝗻𝗴
// 19. What are some common tools and libraries for testing React components ?
// 20. How do you test a React component using Jest and React Testing Library?
// 21. What are some strategies for debugging React applications ?

// 𝗣𝗿𝗮𝗰𝘁𝗶𝗰𝗮𝗹 𝗔𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻
// 22. How do you handle forms and form validation in React ?
// 23. How do you handle error boundaries in React, and why are they important?


// 24. What is the significance of keys in React lists, and how do they affect performance and rendering ?

// 11. What are the difference between Package.json and Package.lock.json ?
// ans : package.json is a file that gives the necessary information to npm which allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, version, license, scripts, and configuration data. package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

//12. What are the differences between client side and server side rendering ?

// 20. What is meant by forward ref ?

//37. What is Strict mode in react ?

//39. Practical question: How to send data from child to parent using callback functions ?


// 40. Practical question: How to send the data from child component to parent using useRef ?


//43.different design patterns used in react ?


// 46. What are React Mixins ?

//50. What are the differences between create element vs clone element in react ?


//51. When to use useState and useReducer ?

// 52. What is flushSync in react ?

//54. What is react-router has context menu

//5. Differentiate between a variable that is null, undefined, or undeclared.
// ans: A variable that is null has been explicitly assigned a value of null, which represents the absence of a value. A variable that is undefined has not been assigned a value and does not exist in memory. An undeclared variable has not been declared using the var, let, or const keywords and will throw a ReferenceError if you try to access it.

//8. What is a common scenario for employing anonymous functions ?
// ans: Anonymous functions are commonly used in scenarios where a function is only needed for a short period of time or is used as a callback function. They are often used in event handlers, callbacks, and higher-order functions where a named function is not necessary or would clutter the code.

// 9. Distinguish between host objects and native objects.
// ans: Host objects are objects provided by the environment in which JavaScript is running, such as the browser or Node.js. They include objects like window, document, and console in the browser environment. Native objects are built-in objects provided by the JavaScript language, such as Array, Object, and Function. Host objects are specific to the environment, while native objects are part of the JavaScript language itself.


//10. Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'
// 11. Can you elucidate the purposes of Function.call and Function.apply, along with their notable differences ?


// 12. Describe the Function.prototype.bind method.

//13. Explain the differences between feature detection, feature inference, and utilizing the User Agent(UA) string.

//14. Define the concept of "hoisting."

// 15. What is type coercion, and what are some common pitfalls associated with relying on it in JavaScript code ?
//17. What distinguishes an "attribute" from a "property" ?
// ans: In JavaScript, an "attribute" is a value that is defined in the HTML markup of an element, while a "property" is a value that is defined in the DOM object of an element. Attributes are defined in the HTML markup and can be accessed using the getAttribute and setAttribute methods. Properties are defined in the DOM object and can be accessed directly as object properties. Attributes are static and do not change, while properties are dynamic and can be updated.

// 18. List the advantages and disadvantages of extending built -in JavaScript objects.

//19. Discuss the same - origin policy's implications for JavaScript.


// 24. Enumerate the benefits and drawbacks of immutability and explain how you can achieve it in your code.


// 27. Compare ES6 classes and ES5 function constructors, and furnish a use case for the arrow(=> ) function syntax.
//28. Describe the advantages of using the arrow syntax for methods in constructors.

//30. Give an example of generating a string using ES6 Template Literals and explain their benefits.
// 31. Provide an example of a curry function and clarify why this syntax can be advantageous.

//32. Discuss the benefits of using spread syntax and differentiate it from rest syntax.

// 33. Explain how code sharing between files can be accomplished.

// 1. What is the DOM, and how does it relate to HTML ?


// 3. Explain the differences between getElementById, getElementsByClassName, and getElementsByTagName.

// 4. What is the purpose of the querySelector method, and how does it differ from querySelectorAll ?


// 5. Explain the concept of event bubbling and how it impacts event handling in the DOM.

// 6. How do you stop event propagation in the DOM ?

// 7. What is event delegation, and why is it useful in DOM manipulation ?

// 8. How can you dynamically create HTML elements using JavaScript?
// 10. How can you modify CSS properties of an element in the DOM using JavaScript?



// 11. Explain the purpose of the setAttribute and getAttribute methods in DOM manipulation.



// 12. What is the difference between appendChild and insertBefore methods for adding elements to the DOM ?


// 13. How do you remove elements from the DOM using JavaScript?



// 15. Explain how to clone an element in the DOM using JavaScript.


// 19. Explain the differences between classList.add, classList.remove, and classList.toggle.



// 20. How can you traverse the DOM tree using JavaScript?

// 21. What are data attributes(data -*), and how can you use them in DOM manipulation ?

// 22. Explain the purpose of the style property in DOM manipulation.

// 23. How can you retrieve the dimensions(width and height) of an element in the DOM ?

// 24. What is the purpose of the offset properties(offsetWidth, offsetHeight, offsetLeft, offsetTop) in DOM manipulation ?
// ans: The offset properties(offsetWidth, offsetHeight, offsetLeft, offsetTop) represent the dimensions and position of an element relative to its offset parent. They provide information about the size and position of an element within its containing block. The offsetWidth and offsetHeight properties return the width and height of the element, including padding, border, and scrollbar(if present). The offsetLeft and offsetTop properties return the distance of the element's top-left corner from its offset parent's top-left corner.

// 25. How do you handle form manipulation in the DOM using JavaScript?
// ans: You can handle form manipulation in the DOM using the form property of an element to access form elements and their values. You can use the submit event to handle form submissions, prevent the default behavior of the form, and access the form data. You can use the reset method to clear the form fields and reset the form to its initial state. You can also use the FormData API to access and manipulate form data in the DOM.



// 26. Explain the differences between innerText, textContent, and innerHTML.
// ans: innerText: It returns the visible text content of an element, excluding any hidden text or elements. It is not supported in Firefox and is slower than textContent.

// innerHTML: It returns the HTML content of an element, including all child elements. It can be used to set or get the HTML content of an element and is faster than textContent.

// textContent: It returns the text content of an element, including all text and elements. It returns the text content of all elements, including hidden elements, and is faster than innerText.

// 27. How do you detect if an element is hidden or visible in the DOM ?
// ans: You can detect if an element is hidden or visible in the DOM by checking its display, visibility, or opacity CSS properties. You can use the getComputedStyle method to access the computed styles of an element and check if it is hidden or visible based on its CSS properties.

// implementation example:
// const element = document.getElementById('example');
// const styles = window.getComputedStyle(element);
// const display = styles.getPropertyValue('display');
// const visibility = styles.getPropertyValue('visibility');
// const opacity = styles.getPropertyValue('opacity');

// if (display === 'none' || visibility === 'hidden' || opacity === '0') {
//     console.log('Element is hidden');
// } else {
//     console.log('Element is visible');
// }




// 28. What are the differences between the client and offset properties in DOM manipulation ?
// answer: The client properties(clientWidth, clientHeight, clientLeft, clientTop) represent the dimensions and position of an element relative to the viewport. The offset properties(offsetWidth, offsetHeight, offsetLeft, offsetTop) represent the dimensions and position of an element relative to its offset parent.

// example: offsetWidth vs clientWidth
// const element = document.getElementById('example');
// console.log(element.offsetWidth); // returns the width of the element including padding, border, and scrollbar(if present)

// console.log(element.clientWidth); // returns the width of the element excluding padding and border



// 29. How can you handle scroll events in the DOM using JavaScript?
// ans: You can handle scroll events in the DOM using the addEventListener method to listen for the scroll event on the window or a specific element. You can use the scroll event to trigger actions like lazy loading images, infinite scrolling, and updating the UI based on the scroll position. You can access the scroll position using the window.scrollX and window.scrollY properties or the element.scrollTop and element.scrollLeft properties.

//implementation example:
// window.addEventListener('scroll', () => {
//     console.log('Scrolling...');
// });



// 30. Explain the differences between createDocumentFragment and createElement in DOM manipulation.
// ans: createDocumentFragment is used to create a new DocumentFragment node that can hold multiple child nodes. It is useful for creating a group of nodes that can be added to the DOM in a single operation, improving performance and reducing reflows. createElement is used to create a new element node with the specified tag name. It creates a single element node that can be added to the DOM as a child of another element.
// Example:
// const fragment = document.createDocumentFragment();
// const div = document.createElement('div');
// fragment.appendChild(div);
// document.body.appendChild(fragment);

// use case : When you need to create multiple elements and add them to the DOM in a single operation, you can use createDocumentFragment to improve performance and reduce reflows.


// what is redis ?
// Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. It supports various data structures like strings, lists, sets, sorted sets, hashes, bitmaps, and hyperloglogs. Redis is known for its high performance, scalability, and versatility, making it a popular choice for real-time applications, caching, and messaging systems.

// exmple
// const redis = require('redis');
// const client = redis.createClient();

// client.on('connect', () => {
//     console.log('Connected to Redis');
// });

// client.set('key', 'value', (err, reply) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(reply);
//     }
// client.get
// client.hset
// client.hget

// what is docker and how to use it or work ?
// Docker is a platform that allows you to develop, deploy, and run applications in containers. Containers are lightweight, portable, and isolated environments that contain everything needed to run an application, including code, runtime, system tools, libraries, and settings. Docker provides tools and services to manage containers, build images, and orchestrate containerized applications.

// Docker uses a client-server architecture with the Docker Engine as the server and the Docker CLI as the client. You can use the Docker CLI to interact with the Docker Engine and perform tasks like building images, running containers, and managing networks and volumes.

// To use Docker, you need to install the Docker Engine on your machine and create a Dockerfile to define the configuration of your application. You can build a Docker image from the Dockerfile using the docker build command and run a container from the image using the docker run command. You can also use Docker Compose to define and run multi-container applications using a YAML configuration file.
// example
// Dockerfile
// FROM node:14
// WORKDIR /app
// COPY package.json .
// RUN npm install
// COPY . .
// EXPOSE 3000
// CMD ["node", "index.js"]

// docker build -t myapp .
// docker run -p 3000:3000 myapp

// what is kubernetes ?
// Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides a platform for managing containerized workloads and services, ensuring that they run reliably and efficiently in a distributed environment.

// Kubernetes uses a master-slave architecture with a control plane (master) that manages the cluster and worker nodes (slaves) that run the containers. The control plane includes components like the API server, scheduler, controller manager, and etcd, while the worker nodes run the containers using container runtimes like Docker or containerd.

// Kubernetes allows you to define and deploy applications using YAML configuration files called manifests. You can define resources like pods, deployments, services, and ingresses in the manifests to describe the desired state of your application. Kubernetes uses the manifests to create and manage resources in the cluster, ensuring that the application runs as expected.

// Kubernetes provides features like automatic scaling, self-healing, load balancing, service discovery, and rolling updates to manage containerized applications effectively. It allows you to run applications in a cloud-native, microservices architecture and scale them to meet changing demands.


// what is kafka ?


// what is microservices ?
// Microservices is an architectural style that structures an application as a collection of small, loosely coupled services that are independently deployable and scalable. Each service in a microservices architecture is responsible for a specific business function and communicates with other services through APIs or messaging protocols.

// Microservices allow you to break down a monolithic application into smaller, more manageable services that can be developed, deployed, and scaled independently. Each service can be developed using different technologies, languages, and frameworks, allowing teams to work autonomously and innovate faster.

// Microservices provide benefits like improved scalability, resilience, flexibility, and maintainability. They allow you to scale individual services based on demand, isolate failures to prevent cascading failures, and update services without affecting the entire application. Microservices also enable continuous delivery, rapid development, and easier maintenance of complex applications.


// what is REST API ?
// REST API stands for Representational State Transfer Application Programming Interface. It is a set of rules and conventions for building and interacting with web services using the HTTP protocol. REST APIs use standard HTTP methods like GET, POST, PUT, DELETE to perform CRUD(Create, Read, Update, Delete) operations on resources.


// what is GraphQL ?
// GraphQL is a query language and runtime for APIs that allows clients to request only the data they need. It provides a more flexible and efficient way to interact with APIs compared to traditional REST APIs. With GraphQL, clients can specify the shape and structure of the data they want to retrieve, reducing over-fetching and under-fetching of data.


// what is JWT ?
// JWT stands for JSON Web Token. It is an open standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and authorization in web applications. A JWT consists of three parts: a header, a payload, and a signature. The header contains metadata about the token, the payload contains the claims or data, and the signature is used to verify the integrity of the token.

// what is OAuth ?

// OAuth stands for Open Authorization. It is an open standard for access delegation that allows users to grant third-party applications access to their resources without sharing their credentials. OAuth is commonly used for authentication and authorization in web and mobile applications. It provides a secure and standardized way to authorize access to APIs and services.


// what is CORS ?
// CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by browsers that allows servers to specify who can access their resources. CORS prevents unauthorized cross-origin requests and protects sensitive data from being accessed by malicious websites. CORS policies are enforced by browsers and can be configured on the server to allow or restrict cross-origin requests.


// what is CSRF ?
// CSRF stands for Cross-Site Request Forgery. It is a type of attack where a malicious website tricks a user's browser into making unauthorized requests to a trusted website. CSRF attacks can lead to unauthorized actions being performed on behalf of the user, such as changing account settings or making financial transactions. To prevent CSRF attacks, websites can use techniques like CSRF tokens, same-site cookies, and referer checking.

// what is XSS ?
// XSS stands for Cross-Site Scripting. It is a type of security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. XSS attacks can be used to steal sensitive information, hijack user sessions, or deface websites. To prevent XSS attacks, websites can sanitize user input, validate and encode output, and use Content Security Policy headers.

// what is CI/CD ?
// CI/CD stands for Continuous Integration/Continuous Deployment. It is a set of practices and tools that automate the process of building, testing, and deploying software. Continuous Integration involves automatically building and testing code changes as they are committed to a shared repository. Continuous Deployment involves automatically deploying code changes to production after passing tests and reviews. CI/CD helps teams deliver software faster, with higher quality and reliability.




// 1. Explain the concept of lazy loading and how it can improve performance?
// ans = Lazy loading is a technique used to defer the loading of non-essential resources until they are needed. It helps to improve performance by reducing the initial page load time and only loading resources when they are required. Lazy loading can be used for images, videos, scripts, and other assets to optimize the loading time of a web page and improve the user experience.

// 2. What are Web Workers and how can they be used to improve performance ?
// answer : Web Workers are a browser feature that allows you to run JavaScript code in a separate thread from the main thread. They can be used to perform computationally intensive tasks, such as data processing, without blocking the main thread and affecting the user interface. Web Workers help to improve performance by offloading tasks to background threads and keeping the main thread responsive and performant.
// Check if the browser supports Web Workers
// if (window.Worker) {
//     // Create a new Worker instance
//     const worker = new Worker('worker.js');

//     // Send a message to the Worker
//     worker.postMessage('Hello, Worker!');

//     // Listen for messages from the Worker
//     worker.onmessage = function (event) {
//         console.log('Message from Worker:', event.data);
//     };

//     // Handle errors from the Worker
//     worker.onerror = function (error) {
//         console.error('Worker error:', error);
//     };
// } else {
//     console.log('Web Workers are not supported in this browser.');
// }

// // Listen for messages from the main thread
// self.onmessage = function (event) {
//     console.log('Message from main script:', event.data);

//     // Perform some computation or task
//     let result = event.data + ' - processed by Worker';

//     // Send the result back to the main thread
//     self.postMessage(result);
// };



// 3. Explain the concept of caching and how it can be used to improve performance.
// answer: Caching is a technique used to store copies of resources like images, scripts, and stylesheets locally on the client's device. It helps to reduce the number of network requests and improve performance by serving cached resources instead of fetching them from the server. Caching can be implemented using browser caching, service workers, and CDNs to store and serve cached resources efficiently.

// 4. What are some tools that can be used to measure and analyze JavaScript performance ?
// answer: Some tools that can be used to measure and analyze JavaScript performance include Chrome DevTools, Lighthouse, WebPageTest, and Google PageSpeed Insights. These tools provide insights into performance metrics like page load time, rendering speed, network requests, and resource sizes. They can help identify performance bottlenecks, optimize code, and improve the overall performance of web applications.

// 5. How can you optimize network requests for better performance?
// answer : You can optimize network requests for better performance by reducing the number of requests, minimizing the size of resources, and using techniques like caching, compression, and lazy loading. You can combine and minify CSS and JavaScript files, use asynchronous loading for scripts, and optimize images and fonts to reduce the size of resources. You can also use CDNs, HTTP/2, and prefetching to improve the speed and efficiency of network requests.

// 6. What are the different types of testing in software development ?
// answer : The different types of testing in software development include unit testing, integration testing, end-to-end testing, performance testing, security testing, and usability testing. Unit testing involves testing individual components or functions in isolation. Integration testing involves testing the interactions between different components or systems. End-to-end testing involves testing the entire application flow from start to finish. Performance testing involves testing the speed, scalability, and reliability of the application. Security testing involves testing for vulnerabilities and ensuring data protection. Usability testing involves testing the user experience and interface design.

// 7. Explain the difference between unit testing, integration testing, and end - to - end testing.
// 8. What are some popular JavaScript testing frameworks ?
// answers : Some popular JavaScript testing frameworks include Jest, Mocha, Jasmine, and Karma. Jest is a testing framework developed by Facebook that is commonly used for testing React applications. Mocha is a flexible testing framework that can be used for both front-end and back-end testing. Jasmine is a behavior-driven testing framework that is easy to set up and use. Karma is a test runner that can be used to run tests in multiple browsers and environments.

// 9. How do you write unit tests for JavaScript code ?
// answers: To write unit tests for JavaScript code, you can use testing frameworks like Jest, Mocha, or Jasmine. You can create test suites and test cases to verify the behavior of individual functions or components. You can use assertions to check the expected output of functions and mock dependencies to isolate the code being tested. You can run tests using the testing framework's command-line interface or integration with a build tool like Webpack or Babel.

// 10. Explain the concept of test - driven development(TDD).
// 11. What are mocks and stubs and how are they used in testing ?
// answers: Mocks and stubs are testing techniques used to isolate code dependencies and control the behavior of external components in tests. Mocks are fake objects that mimic the behavior of real objects and can be used to simulate interactions with external services or APIs. Stubs are objects that replace real objects and provide predefined responses to method calls. Mocks and stubs help to simplify testing, improve test coverage, and isolate code for unit testing.

// 12. How can you test asynchronous code in JavaScript ?
// answers: To test asynchronous code in JavaScript, you can use techniques like callbacks, promises, async/await, and testing frameworks like Jest or Mocha. You can use Jest's built-in functions like test, expect, and async/await to write asynchronous tests. You can use setTimeout, Promises, or async functions to simulate asynchronous behavior and test the expected outcomes. You can use Jest's timers, mocks, and assertions to test asynchronous code and handle asynchronous operations in tests.

// 13. What are some best practices for writing maintainable and effective tests in JavaScript ?
// 14. Explain the concept of code coverage and how it can be used to assess test quality.
// 15. What are some tools that can be used for JavaScript testing ?
// 16. What are design patterns and why are they useful ?
// answers: Design patterns are reusable solutions to common problems in software design. They provide a structured approach to solving design and implementation challenges and help developers create scalable, maintainable, and efficient code. Design patterns help to standardize best practices, improve code quality, and promote code reusability. They provide a common language and framework for discussing and implementing solutions to common software design problems.



// 17. Explain the concept of the Singleton pattern.
// answers: The Singleton pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance. It is commonly used to manage shared resources, configuration settings, or global state in an application. The Singleton pattern restricts the instantiation of a class to a single
// instance and provides a way to access that instance globally. It can be implemented using a static instance variable, a private constructor, and a static method to access the instance.
// class Singleton {
//     constructor() {
//         if (!Singleton.instance) {
//             Singleton.instance = this;
//         }
//         return Singleton.instance;
//     }
// }
// const instance1 = new Singleton();
// const instance2 = new Singleton();
// console.log(instance1 === instance2); // true


// 18. What is the Factory pattern and how is it used ?
// answers: The Factory pattern is a creational design pattern that provides an interface for creating objects without specifying their concrete classes. It allows you to create objects of different types based on a common interface or superclass. The Factory pattern decouples the creation of objects from their implementation and provides a way to create objects dynamically at runtime. It can be used to encapsulate object creation logic, improve code flexibility, and promote code reusability.

// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
// }
// class CarFactory {
//     createCar(make, model) {
//         return new Car(make, model);
//     }
// }
// const factory = new CarFactory();
// const car = factory.createCar('Toyota', 'Camry');


// 19. Explain the Observer pattern and its use cases.
// answers: The Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. It is commonly used to implement event handling, pub/sub systems, and data binding in applications. The Observer pattern allows objects to subscribe to and receive notifications from a subject when its state changes. It helps to decouple the subject and observers, improve code modularity, and enable loose coupling between components.

// class Subject {
//     constructor() {
//         this.observers = [];
//     }
//     addObserver(observer) {
//         this.observers.push(observer);
//     }
//     notifyObservers(message) {
//         this.observers.forEach(observer => observer.update(message));
//     }
// }
// class Observer {
//     update(message) {
//         console.log(`Observer received message: ${message}`);
//     }
// }
// const subject = new Subject();
// const observer1 = new Observer();
// const observer2 = new Observer();
// subject.addObserver(observer1);
// subject.addObserver(observer2);
// subject.notifyObservers('Hello Observers!');


// 20. What is the Module pattern and how does it help with encapsulation ?
// answers: The Module pattern is a design pattern that provides a way to encapsulate code into self-contained modules with private and public members. It helps to organize and structure code, prevent naming conflicts, and improve code maintainability. The Module pattern uses closures to create private variables and functions that are not accessible from outside the module. It exposes a public API that allows controlled access to the module's functionality. The Module pattern helps to achieve encapsulation, information hiding, and code organization in JavaScript applications.


// decorators patthern
// class Coffee {
//     cost() {
//         return 5;
//     }
// }
// class MilkDecorator {
//     constructor(coffee) {
//         this.coffee = coffee;
//     }
//     cost() {
//         return this.coffee.cost() + 1.5;
//     }
// }
// let coffee = new Coffee();
// coffee = new MilkDecorator(coffee);
// console.log(coffee.cost()); // 6.5



// 1. Implement Currying with Placeholders.
// 2. Implement Deep Flatten for Arrays, Objects, and Primitives.
// 3. Implement your custom call, apply, and bind functions.
// 4. Execute N async tasks in series, parallel, and race.
// // Series
// function executeSeries(tasks) {
//     return tasks.reduce((promise, task) => promise.then(task), Promise.resolve());
// }

// // Parallel
// function executeParallel(tasks) {
//     return Promise.all(tasks.map(task => task()));
// }

// // Race
// function executeRace(tasks) {
//     return Promise.race(tasks.map(task => task()));
// }

// // Usage example
// const task = (i) => () => new Promise(res => setTimeout(() => res(i), 1000));

// executeSeries([task(1), task(2), task(3)]).then(console.log); // [1, 2, 3]
// executeParallel([task(1), task(2), task(3)]).then(console.log); // [1, 2, 3]
// executeRace([task(1), task(2), task(3)]).then(console.log); // 1 (depends on which task resolves first)

// 5. Build your custom Event Emitter class.
// 6. Implement your custom native JavaScript promises.
// 7. Memoize / cache identical API requests.
// 8. Implement your custom Object.assign.
// 9. Create a Custom Throttle and Debounce Implementation.
// 10. Implement a Deep Clone Function.

// Implement your custom Promise.all.
// Implement your custom Promise.race.
// Implement Lazy Evaluation for a Function.
// Implement an LRU Cache.
// Implement Function Composition.
// Implement a Retry Function.
// Implement a Custom Array.map().
// Implement a Custom Array.filter().
// Create a Custom Event Loop Simulation.
// Implement a Basic Observer Pattern.


// 1.Explain the concept of the Prototype pattern.
//6.What is Cross - Site Scripting(XSS) and how can you prevent it ?
// 7.Explain the concept of Cross - Site Request Forgery(CSRF) and its mitigation techniques.
// 8.How can you prevent SQL injection vulnerabilities in JavaScript applications ?
//9.What are some best practices for handling sensitive data in JavaScript ?
//10.Explain the concept of Content Security Policy(CSP) and how it enhances security.
// 11.What are some common security headers and their purpose ?
//12.How can you prevent clickjacking attacks?
//13.Explain the concept of input validation and its importance in security.
// 14.What are some tools and techniques for identifying security vulnerabilities in JavaScript code ?
//15.How can you implement secure authentication and authorization in JavaScript applications ?
//16.Explain the same - origin policy with regards to JavaScript.
// 17.What is 'use strict'; in JavaScript for?
//18.What tools and techniques do you use for debugging JavaScript code ?
//19.How does JavaScript garbage collection work ?
// 20.Explain what a single - page app is and how to make one SEO - friendly.
// 21.How can you share code between JavaScript files ?
//22.How do you organize your code ?
//23.What are some of the advantages / disadvantages of writing JavaScript code in a language that compiles to JavaScript ?
// 24.When would you use document.write() ?


// 𝗛𝗧𝗠𝗟
// ‣ Difference between picture and img elements ?
// ans : The <img> element is used to embed an image in an HTML document. It has a src attribute that specifies the URL of the image and an alt attribute that provides alternative text for screen readers and when the image cannot be displayed. The <img> element is self-closing and does not have any child elements.

// The <picture> element is used to provide multiple sources for an image based on different conditions like screen size, resolution, or format. It contains one or more <source> elements with different media queries, sizes, and formats, and a <img> element as a fallback for browsers that do not support the <picture> element. The <picture> element allows developers to provide responsive images that adapt to different devices and conditions.

// ‣ Purpose of object tag vs.iframe ?
// ans : The <object> element is used to embed external resources like images, videos, and other media types in an HTML document. It can contain various types of content, including images, videos, audio, and interactive elements like Flash. The <object> element provides fallback content for browsers that do not support the embedded resource and allows developers to specify attributes like width, height, and type.

// The <iframe> element is used to embed another HTML document within the current document. It creates a nested browsing context that can display external web pages, videos, maps, and other content. The <iframe> element is commonly used for embedding third-party content like social media widgets, advertisements, and interactive elements. It allows developers to isolate and control the embedded content within a separate frame.

// ‣ What are ARIA attributes and their importance ?
// ans : ARIA attributes are a set of accessibility attributes defined by the W3C to improve the accessibility of web content for users with disabilities. ARIA stands for Accessible Rich Internet Applications and provides additional information to assistive technologies like screen readers in interpreting and navigating web pages.

// ARIA attributes include roles, states, and properties that describe the structure, behavior, and relationships of elements on a web page. They help screen readers understand the purpose and functionality of interactive elements, landmarks, and widgets, making web content more accessible to users with disabilities.

// ‣ How do you implement a responsive grid in HTML5 ?
// ans : To implement a responsive grid in HTML5, you can use CSS frameworks like Bootstrap, Foundation, or CSS Grid Layout. These frameworks provide pre-defined grid systems with responsive classes and utilities that allow you to create responsive layouts for different screen sizes and devices.

// ‣ localStorage vs.sessionStorage ?
// ‣ What are Web Components and how to create one ?
// ans : Web Components are a set of web platform APIs that allow you to create reusable custom elements with encapsulated functionality and styling. Web Components consist of four main technologies: Custom Elements, Shadow DOM, HTML Templates, and HTML Imports.

// ‣ How does Shadow DOM work ?
// ans : Shadow DOM is a web standard that allows you to encapsulate the styling and behavior of a custom element within a hidden subtree called a shadow tree. The shadow tree is separate from the main DOM tree and provides a scoped environment for the custom element's content, styles, and scripts. Shadow DOM helps to isolate the internal structure and styling of a custom element from the rest of the document, preventing style conflicts and ensuring encapsulation.
{/* <div id="host"></div>

<script>
  let host = document.getElementById('host');
  let shadowRoot = host.attachShadow({mode: 'open'});

  shadowRoot.innerHTML = `
    <div>
      <slot></slot>
    </div>
  `;

  // Insert content into the shadow DOM using slot
  let p = document.createElement('p');
  p.textContent = 'This content is projected into the shadow DOM!';
  shadowRoot.appendChild(p);
</script> */}


// ‣ What are Web Workers and their benefits ?
// ans:
// ‣ What is contenteditable attribute ?
// ‣ canvas vs.SVG for graphics ?

//  𝗝𝗔𝗩𝗔𝗦𝗖𝗥𝗜𝗣𝗧
// ‣ How does this work in different contexts ?
// ‣ Shallow vs.deep copy in JS ?
// ‣ What is the Module Pattern in JS ?
// ‣ How do callbacks, promises, and async / await affect the event loop ?
// ‣ What are decorators in JS ?
// ‣ Difference between call(), apply(), bind() ?
// ‣ What is the Reflect API in JS ?
// ‣ How to handle race conditions in JS ?
// ‣ What is WeakMap vs.Map ?
// ‣ Explain event delegation in JS.

//  𝗥𝗘𝗔𝗖𝗧
// ‣ useEffect vs.useLayoutEffect ?
// ‣ React lifecycle methods in class vs.functional components ?
// ‣ Managing global state without Redux / Context API ?
// ‣ How does React's reconciliation work?
// ‣ Implementing SSR and SSG in React ?
// ‣ What are Suspense and Lazy loading in React ?
// ‣ Error boundaries in React ?
// ‣ What is React strict mode ?
// ‣ React memoization: React.memo(), useMemo(), useCallback() ?
// ‣ What is React Fiber architecture ?

//  𝗔𝗖𝗖𝗘𝗦𝗦𝗜𝗕𝗜𝗟𝗜𝗧𝗬(𝗔𝟭𝟭𝗬)
// ‣ How to create an accessible custom dropdown ?
// ‣ What is aria - live and its use ?
// ‣ Focus management in SPAs ?
// ‣ Use of aria - hidden for dynamic content ?
// ‣ Making tables accessible to screen readers ?
// ‣ Explain tabindex and focus order in forms ?
// ‣ Accessible multimedia elements ?
// ‣ Best practices for accessible form error messages ?
// ‣ Testing accessibility: automated vs.manual methods ?
// ‣ accesskey attribute in accessibility ?

//  𝗢𝗣𝗧𝗜𝗠𝗜𝗭𝗔𝗧𝗜𝗢𝗡
// ‣ Difference between HTTP / 1.1 and HTTP / 2 ?
// ‣ How to implement Critical CSS ?
// ‣ Efficient caching strategies for performance ?
// ‣ Preventing layout shifts(CLS) ?
// ‣ What is resource prefetching ?
// ‣ Using Intersection Observer for lazy loading ?
// ‣ Code - splitting in React for performance ?
// ‣ Prioritizing critical resources for page load ?
// ‣ Optimizing performance of large image galleries ?
// ‣ What are Web Vitals and how to optimize Core Web Vitals ?


// 𝗛𝗧𝗠𝗟
// 1. What is the difference between `id` and `class` attributes?
// 2. How does the `doctype` declaration affect a webpage?
// 3. Explain semantic HTML and its importance.
// 4. What are `meta` tags, and why are they used?
// 5. What is the difference between `span` and `div` tags?
// 6. How does the `defer` attribute in a script tag work?
// 7. What is the difference between inline, block, and inline-block elements?
// 8. How do you optimize images for web performance in HTML?
// 9. What are custom data attributes, and how are they used?
// 10. How would you create an accessible custom tooltip using only HTML?

// 𝗝𝗔𝗩𝗔𝗦𝗖𝗥𝗜𝗣𝗧
// 1. What are closures, and how are they used?
// 2. Explain the difference between `var`, `let`, and `const`.
// 3. What is the event loop in JavaScript?
// 4. How does prototypal inheritance work?
// 5. What are promises, and how do they compare to async/await?
// 6. What is the difference between `==` and `===`?
// 7. Explain the concept of "hoisting" in JavaScript.
// 8. How do you handle errors in JavaScript?
// 9. What is debouncing and throttling in JavaScript?
// 10. How would you implement a deep clone of an object without using libraries?

// 𝗥𝗘𝗔𝗖𝗧
// 1. What is the virtual DOM, and how does it work?
// 2. How do React functional components differ from class components?
// 3. What are React hooks, and why are they used?
// 4. Explain the concept of lifting state up in React.
// 5. What is the purpose of `useEffect` and how is it used?
// 6. How does context API work in React?
// 7. What is the difference between controlled and uncontrolled components?
// 8. How do you optimize a React application’s performance?
// 9. What are React portals, and how are they useful?
// 10. How would you implement a custom hook to debounce user input in a React application?

// 𝗔𝗰𝗰𝗲𝘀𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝘆 (𝗔𝟭𝟭𝗬)
// 1. What is ARIA, and why is it important?
// 2. How would you ensure a form is accessible?
// 3. What are some common accessibility issues in web development?
// 4. How do you make images accessible?
// 5. What is a screen reader, and how does it work?
// 6. How would you create an accessible navigation menu?
// 7. What is the difference between `role="button"` and a `<button>` element?
// 8. How do you test a webpage for accessibility?

// 𝗢𝗽𝘁𝗶𝗺𝗶𝘇𝗮𝘁𝗶𝗼𝗻
// 1. What is lazy loading, and how do you implement it?
// ans: Lazy loading is a technique used to defer the loading of non-essential resources at the initial page load. It helps improve page load times and performance by loading resources only when they are needed. Lazy loading is commonly used for images, videos, and other media files that are not visible above the fold or on the initial viewport.

// 2. How do you reduce the size of a JavaScript bundle?
// ans: You can reduce the size of a JavaScript bundle by using techniques like code splitting, tree shaking, minification, and compression. Code splitting allows you to split your code into smaller chunks that are loaded on demand, reducing the initial bundle size. Tree shaking is a process that eliminates unused code from the bundle, reducing the overall size. Minification removes unnecessary characters and whitespace from the code, while compression reduces the size of the code by using algorithms like Gzip or Brotli.

// 3. What are the benefits of using a Content Delivery Network (CDN)?
// ans: A Content Delivery Network (CDN) is a network of servers distributed geographically that deliver web content to users based on their location. CDNs provide several benefits for web performance, including faster load times, reduced latency, improved reliability, and scalability. CDNs cache content on edge servers closer to users, reducing the distance and time it takes to deliver content. They also offload traffic from origin servers, distribute load more evenly, and protect against DDoS attacks.

// 4. How do you optimize CSS delivery?
// ans: You can optimize CSS delivery by using techniques like minification, concatenation, and critical CSS. Minification removes unnecessary characters and whitespace from the CSS code, reducing the file size. Concatenation combines multiple CSS files into a single file to reduce the number of HTTP requests. Critical CSS is the CSS required to render above-the-fold content and can be inlined in the HTML to improve initial page load times. You can also use asynchronous loading, lazy loading, and caching to optimize CSS delivery.

// 5. What is caching, and how does it improve performance?
// 6. What are critical rendering paths?
// answer: A "critical rendering path" refers to the exact sequence of steps a browser takes to convert HTML, CSS, and JavaScript code into pixels on the screen, essentially outlining the process of rendering a webpage, and optimizing this path is crucial for fast website loading times and a good user experience

// 7. How do you optimize for Time to First Byte (TTFB)?
// 8. How do service workers improve web performance?
// ans: Service workers enhance web performance by acting as a proxy between a web application and the network, allowing developers to intercept and cache network requests, effectively serving previously downloaded resources from local storage instead of making repeated requests to the server, which significantly reduces loading times and improves user experience, particularly in poor network conditions; this also enables offline functionality by serving cached content when the user is disconnected from the internet.

// • Explain the "font-variant" property.
// ans: The "font-variant" property in CSS controls whether text is displayed in "small-caps" format, essentially converting all lowercase letters to uppercase, but with a smaller font size compared to the regular uppercase letters; essentially allowing you to apply a stylistic variation to the font without changing the font family itself.

// • Use of:not selector ?
// ans: The :not() CSS pseudo-class represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the negation pseudo-class.

// • What are CSS combinators ?
// In CSS, combinators are special characters used to define the relationship between different selectors, allowing you to target specific HTML elements based on their position within the document hierarchy, such as whether they are direct children, siblings, or descendants of other elements; essentially, they help you select elements based on their relative position to each other within the HTML structure.

// • Explain the "object-fit" & "object-position" CSS properties.
// • What is the calc() CSS function?
// • What are CSS counters ? CSS counters enable automatic counting in your styles.
// • What is a CSS grid system ?
// • Write down a selector that will match any links ending in .zip, .ZIP, .Zip, etc.
// • How to select every < a > element whose href attribute value begins with "https", .pdf & CSS ?
// • What is a CSS reset ?
// • What is BEM Method ?
// • Explain about General sibling selector & adjacent sibling selectors.
// • What is opacity & why is it used ?
// • Difference between mobile - first & desktop - first.
// • What are Data Attributes ?
// • Explain the concept of CSS Flexbox & its main advantages in web layout design.
// • How do you vertically center an element within a flex container using Flexbox?Provide the necessary CSS properties and values.
// • Describe the purpose of the flex - grow, flex - shrink, and flex - basis properties in the flex shorthand property.Provide an example.
// • In what situations would you use the align - items and align - content properties in a flex container ? Provide examples.
// • What is z - index ?
// • Difference between display:none and visibility: hidden ?


// How would you find the longest substring without repeating characters in a given string ?
//  2. Given two sorted arrays, how would you merge them without using extra space?
// 3. How would you rotate a 2D matrix by 90 degrees clockwise ?
//  4. How would you find the maximum product subarray in an integer array ?
//5. How can you detect a cycle in a linked list ?
// 6. How would you merge two sorted linked lists ?
//  7. How would you reverse a linked list ?
//8. How would you find the intersection point of two linked lists ?
// 9. How would you find the lowest common ancestor(LCA) of two nodes in a binary tree ?
//  10. How would you determine if a binary tree is a valid binary search tree ?
//11. Can you traverse a binary tree in level order and in zig - zag level order ?
// 12. How would you serialize and deserialize a binary tree ?
//  13. How would you find the longest increasing subsequence in an array ?
//14. How would you solve the coin change problem to find the minimum number of coins needed for a given amount ?
// 15. How would you find the maximum sum of non - adjacent elements in an array ?
//  16. How would you calculate the minimum edit distance between two strings ?
//17. How can you detect a cycle in a directed or undirected graph ?
// 18. Can you implement Dijkstra’s or Bellman - Ford algorithm to find the shortest path in a graph ?
//  19. How would you find the number of connected components in an undirected graph ?
//   20. How would you solve the course schedule problem using topological sorting?
// 21. How would you design a scalable URL shortening service ?
//  22. How would you design a distributed cache system ?
//   23. How would you design a rate limiter for an API ?
// 24. How would you design an online marketplace, similar to Amazon or Flipkart ?
