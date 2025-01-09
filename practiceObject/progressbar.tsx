// Progress Bar how can i create a progress bar in react


import React from 'react';

export default function ProgressBar({ progress }) {

    return (
        <div style={{
            width: "100%",
            height: "20px",
            backgroundColor: "lightgray",
            borderRadius: "10px",
            overflow: "hidden",
        }}>
            <div
                style={{
                    width: `${progress}%`, // Using 'progress' value for dynamic width
                    height: "100%",
                    backgroundColor: "green", // Setting a color for the filled part
                }}
            >
            </div>
        </div>
    );
}
