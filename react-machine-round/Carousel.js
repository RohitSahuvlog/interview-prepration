// Build a Carousel Component: Design a carousel component that displays a slideshow of images or content.

import React, { useState } from 'react';

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'https://via.placeholder.com/600/92c952',
        'https://via.placeholder.com/600/771796',
        'https://via.placeholder.com/600/24f355',
        'https://via.placeholder.com/600/d32776',
    ];

    const goToNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <h2>Carousel</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={goToPreviousImage}>&lt;</button>
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '600px', height: '400px' }} />
                <button onClick={goToNextImage}>&gt;</button>
            </div>
        </div>
    );
}