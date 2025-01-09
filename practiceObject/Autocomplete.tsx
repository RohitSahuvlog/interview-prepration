"use client";
import React, { useState } from "react";
import styled from "styled-components";

const AutocompleteContainer = styled.div`
  position: relative;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

const SuggestionItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

const Autocomplete = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setFilteredSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleClick = (suggestion) => {
        setInputValue(suggestion);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };

    return (
        <AutocompleteContainer>
            <Input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type to search..."
            />
            {showSuggestions && inputValue && (
                <SuggestionsList>
                    {filteredSuggestions.length ? (
                        filteredSuggestions.map((suggestion, index) => (
                            <SuggestionItem key={index} onClick={() => handleClick(suggestion)}>
                                {suggestion}
                            </SuggestionItem>
                        ))
                    ) : (
                        <SuggestionItem>No suggestions available</SuggestionItem>
                    )}
                </SuggestionsList>
            )}
        </AutocompleteContainer>
    );
};

export default Autocomplete;
