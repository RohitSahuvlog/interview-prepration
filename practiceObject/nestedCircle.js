//  Create a nested circles based on input value given by user in textbox
// Create a textbox where user can enter the number
// Nested circles should be generated based on the value entered by the user

import React, { useState } from 'react';

const NestedCircle = () => {
    const [circleCount, setCircleCount] = useState(0);

    const createCircles = (count) => {
        const circles = [];
        for (let i = 0; i < count; i++) {
            circles.push(
                <div
                    key={i}
                    style={{
                        width: 100 - i * 10,
                        height: 100 - i * 10,
                        borderRadius: '50%',
                        border: '1px solid black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {i + 1}
                </div>
            );
        }
        return circles;
    };

    return (
        <div>
            <h1>Nested Circles based on input value</h1>
            <input
                type="number"
                placeholder="Enter number of circles"
                value={circleCount}
                onChange={(e) => setCircleCount(e.target.value)}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {createCircles(circleCount)}
            </div>
        </div>
    );
};


export default NestedCircle;