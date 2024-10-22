// 1. Why can't browsers read JSX ?
// ans : Browsers can't read JSX because it is not a valid JavaScript syntax. JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used to write React components and is transpiled to JavaScript using tools like Babel before being executed in the browser.
// remember keys : not valid javascript syntax, transpiled to javascript using babel, used to write react components, looks similar to xml or html


// 2. Explain the concept of lifting state up in React.
// ans : Lifting state up in React refers to the process of moving the state of a child component to its parent component. This allows multiple child components to share the same state and update it through props passed down from the parent component. By lifting state up, the parent component becomes the single source of truth for the shared state, making the application more predictable and easier to maintain.

// remember keys : moving state from child to parent, multiple child components share same state, update state through props, parent component becomes single source of truth, makes application more predictable and easier to maintain


// 3. What are the new features introduced in React 18 ?
// ans : React 18 introduces several new features and improvements, including concurrent rendering, automatic batching, useTransition hook, useDeferredValue hook, enhanced Suspense, startTransition function, server-side rendering enhancements, React Server Components, and the concurrentMode flag.

// 4. What is concurrent rendering in React 18 ?
// ans : Concurrent rendering in React 18 is a new feature that allows React to work on multiple tasks concurrently, making the rendering process more efficient and responsive. It enables React to prioritize and schedule updates based on their priority level, resulting in smoother user interactions and improved performance.

// remember keys : multiple tasks concurrently, prioritize and schedule updates, smoother user interactions, improved performance

// 5. How does automatic batching work in React 18 ?
// ans : Automatic batching in React 18 is a feature that groups multiple state updates into a single batch, reducing the number of re-renders and improving performance. It automatically batches state updates that occur within the same event loop, ensuring that only the final state is applied to the component.

// 6. What is the useTransition hook, and how does it work ?
// ans : The useTransition hook in React 18 is a new hook that allows developers to control the rendering of updates in a component. It returns a tuple containing a boolean value and a startTransition function. The boolean value indicates whether the component is in a transition state, and the startTransition function allows developers to defer rendering updates until a later time.

// remember keys : control rendering of updates, returns boolean value and startTransition function, defer rendering updates until later time


// 7. Explain the working of useDeferredValue in React 18.
// ans : The useDeferredValue hook in React 18 is used to defer the rendering of a value until it is needed. It allows developers to prioritize the rendering of certain values over others, improving the performance and responsiveness of the application. The useDeferredValue hook returns a deferred value that can be used in components to defer the rendering of non-essential data.

// remember keys : defer rendering of value, prioritize rendering of certain values, improve performance and responsiveness, returns deferred value

// 8. What is Suspense in React, and how does it work ?





// 9. How has React 18 improved Suspense ?
// 10. What is the new startTransition function in React 18 ?
// 11. What is the difference between useTransition and startTransition ?
// 12. How do you use the Concurrent Features introduced in React 18 ?
// 13. How does React 18 enhance server - side rendering(SSR) ?
// 14. What is React Server Components, and how does it work with React 18 ?
// 15. What role does the concurrentMode flag play in React 18 ?