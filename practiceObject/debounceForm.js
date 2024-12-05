// Implement Auto - Save form details with Debouncing
// Create a react form with username and password fileds
// Create a custom debounce function to delay the operations
// When user stops typing use the debounce function to autosave the username and password


import React, { useState } from 'react';

const DebounceForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const saveUserData = debounce((username, password) => {
        console.log('Autosaving:', username, password);
    }, 1000);

    return (
        <div>
            <h1>Auto-Save form details with Debouncing</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => {
                    handleUsernameChange(e);
                    saveUserData(username, password);
                }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => {
                    handlePasswordChange(e);
                    saveUserData(username, password);
                }}
            />
        </div>
    );
};

export default DebounceForm;