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
//     // Update state or perform an operation that can be deferred
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
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/users/:id" component={UserDetails} />
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
// 24. How do JavaScript’s `setTimeout` and `setInterval` work ?
//25. What is a `WeakMap` and how is it different from a`Map` ?
//26. What is a`Set` in JavaScript ?
// 27. What is `Object.create()` used for?
//28. How does JavaScript’s garbage collection work ?
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
//54. What is react - routerhas context menu

//5. Differentiate between a variable that is null, undefined, or undeclared.
//8. What is a common scenario for employing anonymous functions ?
// 9. Distinguish between host objects and native objects.
//10. Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'
// 11. Can you elucidate the purposes of Function.call and Function.apply, along with their notable differences ?
// 12. Describe the Function.prototype.bind method.
//13. Explain the differences between feature detection, feature inference, and utilizing the User Agent(UA) string.
//14. Define the concept of "hoisting."
// 15. What is type coercion, and what are some common pitfalls associated with relying on it in JavaScript code ?
//17. What distinguishes an "attribute" from a "property" ?
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
