"use client";

import React, { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    return (
        <div className="star-rating" style={{ fontSize: "2rem" }}>
            {[...Array(5)].map((_, index) => {
                const value = index + 1;
                return (
                    <span
                        key={value}
                        style={{ color: value <= (hover || rating) ? "#ffc107" : "#e4e5e9" }}
                        onClick={() => setRating(value)}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;