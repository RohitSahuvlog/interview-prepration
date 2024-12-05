"use client";

import React, { useState, createContext, useContext } from "react";
import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const ToastContainer = styled.div`
  position: fixed;
  top: ${(props) => (props.position.includes("top") ? "1rem" : "auto")};
  bottom: ${(props) => (props.position.includes("bottom") ? "1rem" : "auto")};
  left: ${(props) => (props.position.includes("left") ? "1rem" : "auto")};
  right: ${(props) => (props.position.includes("right") ? "1rem" : "auto")};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ToastMessage = styled.div`
  background-color: ${(props) =>
        props.type === "success" ? "#4caf50" : props.type === "error" ? "#f44336" : "#333"};
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  ${(props) =>
        props.isVisible
            ? css`
          animation: fadeIn 0.5s ease-in-out, fadeOut 0.5s ease-in-out ${props.duration}s forwards;
        `
            : css`
          display: none;
        `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
`;

const Toast = ({ message, type, duration, position, isVisible, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration * 1000);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <ToastContainer position={position}>
            <ToastMessage type={type} isVisible={isVisible} duration={duration}>
                {message}
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </ToastMessage>
        </ToastContainer>
    );
};



const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = "info", duration = 5, position = "top-right") => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts([...toasts, { id, message, type, duration, position }]);
    };

    const removeToast = (id) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    duration={toast.duration}
                    position={toast.position}
                    isVisible={true}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
