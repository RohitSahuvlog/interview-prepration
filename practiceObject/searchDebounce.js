// 4. Implement Search filter for a List with debouncing
// Create an array of objects, each containing an id and a countryName
// Display all the country names from the array in the UI.
// Display a search input box that allows users to filter the displayed country names based on their input.
// Implement debouncing on the search input to optimize performance and handle rapid user input efficiently.


import React, { useState } from 'react';

const SearchDebounce = () => {
    const countries = [
        { id: 1, countryName: 'India' },
        { id: 2, countryName: 'USA' },
        { id: 3, countryName: 'UK' },
        { id: 4, countryName: 'Australia' },
        { id: 5, countryName: 'Canada' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(countries);

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const handleSearch = debounce((searchTerm) => {
        const results = countries.filter(country =>
            country.countryName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, 300);

    return (
        <div>
            <h1>Search filter for a List with Debouncing</h1>
            <input
                type="text"
                placeholder="Search country..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleSearch(e.target.value);
                }}
            />
            <ul>
                {searchResults.map(country => (
                    <li key={country.id}>{country.countryName}</li>
                ))}
            </ul>
        </div>
    );
}