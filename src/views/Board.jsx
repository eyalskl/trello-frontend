import React from 'react';
import BoardList from '../components/BoardList';

const Board = () => {
    return (
        <main className="board-container flex-center column">
                <h1> Your Boards! </h1>
            <BoardList/>
        </main>
    )
}

export default Board;
