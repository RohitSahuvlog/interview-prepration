// 7. Implement Drag and Drop: Develop a feature that allows users to drag and drop items within a list.

import React, { useState } from 'react';

const DragAndDrop = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Item 1' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' }, i - index - 2
         { id: 2, text: 'Item 2' }, // i - index - 3


    ]);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
    };

    const handleDrop = (e, index) => {
        const draggedIndex = e.dataTransfer.getData('text/plain');
        const draggedItem = items[draggedIndex];

        const newItems = items.filter((_, i) => i !== draggedIndex);
        newItems.splice(index, 0, draggedItem);

        setItems(newItems);
    };

    const handleDragOver = (e) => {  // why do we need this function? because we need to prevent the default behavior of the browser
        e.preventDefault();
    };

    return (
        <div>
            <h2>Drag and Drop List</h2>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={handleDragOver}

                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DragAndDrop;