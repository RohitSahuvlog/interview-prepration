// tic - tac - toe in next.js
"use client";
import { useState } from "react";


function Board({ squares, onClick }) {
    return (
        <div>
            <div>
                <div>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    );

    function renderSquare(i: number) {
        return (
            <button

                style={{ width: "60px", height: "60px" }}


                onClick={() => onClick(i)}>
                {squares[i]}
            </button>
        );
    }
}

function calculateWinner(board: string[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    function handleClick(i: number) {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    function renderMoves() {
        return (
            <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
        );
    }

    return (
        <div>
            <Board squares={board} onClick={handleClick} />
            <div>
                <p>
                    {winner
                        ? "Winner: " + winner
                        : "Next Player: " + (xIsNext ? "X" : "O")}
                </p>
                {renderMoves()}
            </div>
        </div>
    );
}
export default TicTacToe;