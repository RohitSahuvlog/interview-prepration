// Create a component called ProgressBar which displays a progress bar.The progress bar should have the following styling applied:

// A width of 100%
// A height of 20px
// A border radius of 5px
// The completed bit should be green
// The remaining bit should be lightgrey
// You add the CSS to the component using Styled Components or using Inline CSS or adding identifiers and using the App.css file.It's totally up to you

// The component should accept a percent prop which is used to determine how many percentage of the progress bar to fill with green colour.

// We have already written some code for you in the App.jsx file.


// App.jsx
// import React from 'react';
// import ProgressBar from './ProgressBar';

// const App = () => {
//     return (
//         <div>
//             <ProgressBar percent={50} />
//         </div>
//     );
// };

// export default App;

// You need to complete the ProgressBar component in the ProgressBar.jsx file.
// ProgressBar.jsx
import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ percent }) => {
    return (
        <StyledProgressBar percent={percent}>
            <div className="progress" />
        </StyledProgressBar>
    );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 5px;
    background-color: lightgrey;

    .progress {
        width: ${(props) => props.percent}%;
        height: 100%;
        border-radius: 5px;
        background-color: green;
    }
`;