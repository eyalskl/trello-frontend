import React from 'react';
import BoardList from '../components/BoardList';

const Board = () => {
    return (
        <main className="board-page flex-center">
            <h1> Your Boards! </h1>
            <BoardList />
        </main>
    )
}

export default Board;
