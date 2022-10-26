import React, { useEffect, useState } from "react";
import IBoard from "./common/types/IBoard";
import IPixel from "./common/types/IPixel";
import Board from "./components/Board";
import Renderer from "./components/renderer";
import './App.css'

export default function App() {
    const [currentBoard, setCurrentBoard] = useState<number>(0);
    const [boards, setBoards] = useState<IBoard[]>(() => {
        let newBoards: IBoard[] = [];
        for (let i = 0; i < 16; i++) {
            let pixels: IPixel[][] = [];
            for (let j = 0; j < 16; j++) {
                let pixelRow: IPixel[] = [];
                for (let k = 0; k < 16; k++) {
                    let id = Number(j.toString() + k.toString());
                    pixelRow.push({ id: id, blank: true, color: '', coordinates: [j,k]}); //change color to empty string later
                }
                pixels.push(pixelRow);
            }
            let b: IBoard = { id: i, pixels: pixels, selected: i===0};
            newBoards.push(b);
        }
        return newBoards
    });

    function nextBoard() {
        let newBoards = boards
        if (currentBoard < 15){
            newBoards[currentBoard].selected = false
            newBoards[currentBoard+1].selected = true
            setCurrentBoard(currentBoard+1)
        }
        setBoards(newBoards)
    }
    function previousBoard() {
        let newBoards = boards
        if (currentBoard > 0){
            newBoards[currentBoard].selected = false
            newBoards[currentBoard-1].selected = true
            setCurrentBoard(currentBoard-1)
        }
        setBoards(newBoards)
    }

    function editBoard(editedBoard: IBoard){
        let newBoards: IBoard[] = boards
        newBoards[currentBoard] = editedBoard;
        setBoards(newBoards)
    }
    


    return (
        <div className='main'>
            <h1>current board: {currentBoard}</h1>
            <button onClick={previousBoard}>previous board</button>
            <button onClick={nextBoard}>next board</button>
            <div>
                {boards.map(b => {return b.selected? <Board board={b} key={b.id} editor={editBoard} /> : ''})}
            </div>
            <Renderer boards={boards}/>


        </div>
    );
}
