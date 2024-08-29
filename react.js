// Q21.Which is preferred option with in callback refs and findDOMNode() ?
// A. callback refs
// B. findDOMNode()
// C. Both
// D. None
// Correct Answer: A. callback refs

// exmaple functional based on callback refs

// import React, { Component } from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.myRef = React.createRef();
//     }

//     componentDidMount() {
//         this.myRef.current.focus();
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//             </div>
//         );
//     }
// }

// Q22.Why are String Refs legacy ?explain with  exmaple?
// ans : String refs are legacy because they are considered legacy in React. They are not recommended to use. They are not supported in strict mode
// example of string refs functional based
// import React, { Component } from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.myRef = null;
//     }

//     componentDidMount() {
//         this.myRef.focus();
//     }
