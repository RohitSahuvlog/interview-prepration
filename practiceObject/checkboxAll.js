// In this coding challenge your task is to finish the CheckboxList component. We have already styled it for you.Your task is to implement the functionality to both:
// Select the individual checkboxes.
// Select all checkboxes when the Select All button is clicked.
// image Instructions
// You don’t need to worry about styling your application as we have already done it for you.But if you wish to update the styles, you can use styled - components, inline style or tailwindcss.
// Do not edit the data - testid attributes.
//     Hints
// You should write two handler functions, one to select individual checkboxes, and the second to select all of them.
import React, { useState } from 'react';

const CheckboxList = ({ data }) => {
    const [selected, setSelected] = useState([]);

    const handleSelect = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const handleSelectAll = () => {
        if (selected.length === data.length) {
            setSelected([]);
        } else {
            setSelected(data.map((item) => item.id));
        }
    };

    return (
        <div>
            <button onClick={handleSelectAll} data-testid="select-all">
                Select All
            </button>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={selected.includes(item.id)}
                            onChange={() => handleSelect(item.id)}
                            data-testid={`checkbox-${item.id}`}
                        />
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CheckboxList;
