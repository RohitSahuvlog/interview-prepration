// create custom hook returning(Value, setvalue, stop, resume) to manage incremental
//  in every second


import { useState, useEffect } from 'react';

const useIncrement = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue);
    const [isPaused, setPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setValue((prevValue) => prevValue + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return {
        value,
        setValue,
        isPaused,
        setPaused,
    };
}