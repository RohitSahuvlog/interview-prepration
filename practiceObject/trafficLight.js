//  Implement a traffic light system
// lights switch from green to yellow, yellow to red and red to green and loop indefinitely
// Each light should be for predetermined interval
// Red light: 4000ms, Yellow light: 500ms, Green light: 3000ms


import React, { useState, useEffect } from 'react';

const TrafficLight = () => {

    const [light, setLight] = useState('red');

    useEffect(() => {
        const changeLight = setInterval(() => {
            setLight('green');
            setTimeout(() => {
                setLight('yellow');
                setTimeout(() => {
                    setLight('red');
                }, 500);
            }, 3000);
        }, 4000);

        return () => {
            clearInterval(changeLight);
        };
    }, []);

    return (
        <div>
            <h1>Traffic Light System</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        backgroundColor: light === 'red' ? 'red' : 'grey',
                    }}
                ></div>
                <div
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        backgroundColor: light === 'yellow' ? 'yellow' : 'grey',
                    }}
                ></div>
                <div
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        backgroundColor: light === 'green' ? 'green' : 'grey',
                    }}
                ></div>
            </div>
        </div>
    );
}