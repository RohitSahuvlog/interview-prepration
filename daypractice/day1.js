// react search bar functionality with APi call with debouncing
import React from 'react';
import { useState } from 'react';

const Day1 = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        const timeoutId = setTimeout(async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${value}`);
                const json = await response.json();
                setResult(json);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }, 3000);

        return () => clearTimeout(timeoutId);
    };

    return (
        <div>
            <input type="text" value={search} onChange={handleChange} />
            {loading && <p>Loading...</p>}
            <ul>
                {result.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Day1;

// Lazy loading in react
import React from 'react';

// where is LazyComponent.js file

// const LazyComponent = () => {
//     return <div>Lazy Component</div>;
// };

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => {
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </React.Suspense>
        </div>
    );
}


// what is types vs interfaces in typescript? ans with example?

// Types in TypeScript are more flexible and can define primitive, intersection, union, tuple, or different types of data, while interfaces are used to describe the shape of an object.Types use the type keyword for creating new type, while interfaces use the interface keyword for declaring an interface.

// here are the differences between types and interfaces:

// Extending / Implementing:
// Type Aliases: Can extend from other types or type aliases using the extends keyword.
// Interfaces: Can extend from other interfaces using the extends keyword, but cannot extend from types or type aliases.

// Declaration Merging:
// Type Aliases: Cannot be merged with other types or type aliases.
// Interfaces: Can be merged with other interfaces of the same name.


// Complex Types:
// Type Aliases: Can define complex types such as unions, intersections, and tuples.
// Interfaces: Cannot define unions or tuples.

// Primitive Types:
// Type Aliases: Can alias primitive types and other non - object types.
//Interfaces: Cannot alias primitive types.

// React Props and State:
// Type Aliases: Often preferred for defining props and state in React functional components due to their flexibility.
//Interfaces: Can also be used but are less common for this purpose.





// custom hooks vs Utity hooks
// Custom hooks are JavaScript functions that utilize one or more built-in hooks to create reusable logic that can be shared across multiple components. Custom hooks should start with the word "use" to indicate that they are hooks.

// Utility hooks are custom hooks that provide specific functionality or utility, such as handling form state, managing local storage, or fetching data from an API. These utility hooks can be used in multiple components to reduce code duplication and improve maintainability.


// slice, startWith, splice
// slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end(end not included) where begin and end represent the index of items in that array. The original array will not be modified.

// startWith() method returns a new array with the specified elements added to the beginning of the original array.

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


// css positioning with real word example

// CSS positioning is used to control the layout of elements on a web page. There are four main types of positioning in CSS: static, relative, absolute, and fixed.


// Real-world example: A navigation bar that sticks to the top of the page when scrolling can be achieved using fixed positioning. The navigation bar can be styled with a fixed position and top: 0 to keep it at the top of the viewport as the user scrolls down the page.