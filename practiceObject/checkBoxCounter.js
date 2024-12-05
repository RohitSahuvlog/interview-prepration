// 2. Implement a Dynamic checkbox counter
// Display 4 checkboxes with different names and a button named selectall
// User can select each checkbox
// Select all button click will check all checkboxes
// Button should be disabled until all checkboxes are selected.
// Display selected checkboxes count and names in ui.


import React, { useState } from 'react';

const CheckBoxCounter = () => {
    const [checkboxes, setCheckboxes] = useState([
        { name: 'Checkbox 1', checked: false },
        { name: 'Checkbox 2', checked: false },
        { name: 'Checkbox 3', checked: false },
        { name: 'Checkbox 4', checked: false }
    ]);

    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
        setCheckboxes(updatedCheckboxes);
    };

    const handleSelectAll = () => {
        const updatedCheckboxes = checkboxes.map(checkbox => ({ ...checkbox, checked: true }));
        setCheckboxes(updatedCheckboxes);
    };

    const handleDeselectAll = () => {
        const updatedCheckboxes = checkboxes.map(checkbox => ({ ...checkbox, checked: false }));
        setCheckboxes(updatedCheckboxes);
    };

    const allChecked = checkboxes.every(checkbox => checkbox.checked);
    const selectedCheckboxes = checkboxes.filter(checkbox => checkbox.checked);

    return (
        <div>
            <h1>Dynamic Checkbox Counter</h1>
            {checkboxes.map((checkbox, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(index)}
                    />
                    <label>{checkbox.name}</label>
                </div>
            ))}
            <button onClick={handleSelectAll} disabled={allChecked}>
                Select All
            </button>
            <button onClick={handleDeselectAll}>
                Deselect All
            </button>
            <p>Selected Count: {selectedCheckboxes.length}</p>
            <p>Selected Names: {selectedCheckboxes.map(checkbox => checkbox.name).join(', ')}</p>
        </div>
    );
};


export default CheckBoxCounter;