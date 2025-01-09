"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 10px;
  justify-content: center;
  margin-top: 50px;
`;

const Tile = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isMatched ? '#4caf50' : '#2196f3')};
  color: white;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
`;

const generateTiles = () => {
    const tileValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const tiles = [...tileValues, ...tileValues];
    return tiles.sort(() => Math.random() - 0.5);
};

const TileGame = () => {
    const [tiles, setTiles] = useState(generateTiles());
    const [selectedTiles, setSelectedTiles] = useState([]);
    const [matchedTiles, setMatchedTiles] = useState([]);

    useEffect(() => {
        if (selectedTiles.length === 2) {
            const [first, second] = selectedTiles;
            if (tiles[first] === tiles[second]) {
                setMatchedTiles((prev) => [...prev, first, second]);
            }
            setTimeout(() => setSelectedTiles([]), 1000);
        }
    }, [selectedTiles, tiles]);

    const handleTileClick = (index) => {
        if (selectedTiles.length < 2 && !selectedTiles.includes(index) && !matchedTiles.includes(index)) {
            setSelectedTiles((prev) => [...prev, index]);
        }
    };

    return (
        <GridContainer>
            {tiles.map((tile, index) => (
                <Tile
                    key={index}
                    onClick={() => handleTileClick(index)}
                    isMatched={matchedTiles.includes(index)}
                >
                    {(selectedTiles.includes(index) || matchedTiles.includes(index)) && tile}
                </Tile>
            ))}
        </GridContainer>
    );
};

export default TileGame;
