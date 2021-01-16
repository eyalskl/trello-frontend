import React, { useState } from 'react'
import BoardPreview from './BoardPreview'

const BoardList = () => {
    const [boards, setBoards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return (
        <div className="board-list-container">
            {
                boards.map(board => {
                    return <BoardPreview boardNumber={ board } key={ board } />
                })
            }
        </div>
    )
}

export default BoardList
