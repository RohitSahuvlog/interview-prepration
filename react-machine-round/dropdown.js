// Create a Dropdown Component: Design a dropdown component with options that can be selected by the user.

import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div>
            <div onClick={toggleDropdown} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px' }}>
                {selectedOption || 'Select an option'}
            </div>
            {isOpen && (
                <ul style={{ border: '1px solid #ccc', listStyleType: 'none', padding: '0', margin: '0' }}>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)} style={{ padding: '10px', cursor: 'pointer' }}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;