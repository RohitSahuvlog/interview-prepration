// 5. Build a Countdown Timer: Develop a countdown timer component that starts from a specified time and decrements until it reaches zero.

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (time <= 0) {
            return;
        }
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h2>Countdown Timer</h2>
            <p>{time}</p>
        </div>
    );
}

export default CountdownTimer;

// TODO: Implement the CountdownTimer component as described above.
// The component should accept an initialTime prop that specifies the starting time in seconds.
// The timer should decrement by 1 every second until it reaches zero.
// <CountdownTimer initialTime={60} />
// The component should display the current time in seconds.
