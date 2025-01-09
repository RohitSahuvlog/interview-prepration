"use client";
import React, { useState } from "react";
import styled from "styled-components";

const PollContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Question = styled.h3`
  margin: 0 0 1rem;
`;

const ChoicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ChoiceItem = styled.li`
  margin: 0.5rem 0;
`;

const ChoiceButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: ${(props) => (props.selected ? "#4caf50" : "#2196f3")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.selected ? "#45a049" : "#1e88e5")};
  }
`;

const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0;
`;

const ResultItem = styled.li`
  margin: 0.5rem 0;
`;

const PollWidget = ({ question, choices }) => {
    const [votes, setVotes] = useState(Array(choices.length).fill(0));// [0, 0, 0, 0, 0]= [5,6, 10, 0]
    const [selectedChoice, setSelectedChoice] = useState(null);// javascript - 0
    const [voted, setVoted] = useState(false);

    const handleVote = (index) => {
        if (!voted) {
            const newVotes = [...votes];
            newVotes[index] += 1;
            setVotes(newVotes);
            setSelectedChoice(index);
            setVoted(true);
        }
    };

    const totalVotes = votes.reduce((total, num) => total + num, 0);

    return (
        <PollContainer>
            <Question>{question}</Question>
            {!voted ? (
                <ChoicesList>
                    {choices.map((choice, index) => (
                        <ChoiceItem key={index}>
                            <ChoiceButton
                                onClick={() => handleVote(index)}
                                selected={selectedChoice === index}
                            >
                                {choice}
                            </ChoiceButton>
                        </ChoiceItem>
                    ))}
                </ChoicesList>
            ) : (
                <ResultsList>
                    {choices.map((choice, index) => (
                        <ResultItem key={index}>
                            {choice}: {votes[index]} votes (
                            {((votes[index] / totalVotes) * 100).toFixed(2)}%)
                        </ResultItem>
                    ))}
                </ResultsList>
            )}
        </PollContainer>
    );
};

export default PollWidget;
