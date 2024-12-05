// Load States based on countries | Reactjs
// Create 3 dropdowns load them with countries, states and capitals
// Autopopulate the states based on country selected and capitals based on state selected
// Autoselect country based on state selected and capitals dropdown should be disabled until state is selected


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchStateData = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [capitals, setCapitals] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                setCountries(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);

        const selectedCountry = countries.find(c => c.name.common === country);
        if (selectedCountry) {
            setStates(selectedCountry.states);
            setCapitals([]);
            setSelectedState('');
        }
    };

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);

        const selectedState = states.find(s => s.name === state);
        if (selectedState) {
            setCapitals(selectedState.capital);
        }
    };

    return (
        <div>
            <h1>Load States based on countries | Reactjs</h1>
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select Country</option>
                {countries.map(country => (
                    <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
                ))}
            </select>
            <select value={selectedState} onChange={handleStateChange}>
                <option value="">Select State</option>
                {states.map(state => (
                    <option key={state.name} value={state.name}>{state.name}</option>
                ))}
            </select>
            <select disabled={!selectedState}>
                <option value="">Select Capital</option>
                {capitals.map(capital => (
                    <option key={capital} value={capital}>{capital}</option>
                ))}
            </select>
        </div>
    );
};


export default FetchStateData;
