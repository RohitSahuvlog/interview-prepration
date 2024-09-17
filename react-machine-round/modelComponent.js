// 6. Create a Modal Component: Design a modal component that can be toggled open and closed.

import React, { useState } from 'react';

const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            {isOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                        <button onClick={toggleModal}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    );
}