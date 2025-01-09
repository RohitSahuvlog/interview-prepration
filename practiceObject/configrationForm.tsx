
"use client"
import React, { useState } from "react";
const config = {
    title: "User Registration",
    fields: [
        {
            name: "username",
            label: "Username",
            type: "text",
            placeholder: "Enter your username",
            validation: {
                required: true,
                minLength: 3,
            },
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            validation: {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            },
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            validation: {
                required: true,
                minLength: 6,
            },
        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm your password",
            validation: {
                required: true,
                matchField: "password",
            },
        },
    ],
    submitButton: {
        label: "Register",
    },
};


export const DynamicForm = () => {
    const [formData, setFormData] = useState(
        config.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateField = (field, value) => {
        const { validation } = field;
        if (validation) {
            if (validation.required && !value) {
                return `${field.label} is required`;
            }
            if (validation.minLength && value.length < validation.minLength) {
                return `${field.label} must be at least ${validation.minLength} characters`;
            }
            if (validation.pattern && !validation.pattern.test(value)) {
                return `${field.label} is not valid`;
            }
            if (validation.matchField && value !== formData[validation.matchField]) {
                return `${field.label} does not match ${validation.matchField}`;
            }
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        config.fields.forEach((field) => {
            const error = validateField(field, formData[field.name]);
            if (error) newErrors[field.name] = error;
        });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form submitted successfully:", formData);
            setErrors({});
            // Handle form submission (e.g., send data to an API)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{config.title}</h1>
            {config.fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                    />
                    {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}
                </div>
            ))}
            <button type="submit">{config.submitButton.label}</button>
        </form>
    );
};
