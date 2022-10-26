import React, { useEffect, useState } from 'react'
import IBoard from '../../common/types/IBoard'
import IPixel from '../../common/types/IPixel'
import Pixel from './pixel'
import style from './Board.module.css'
import { Pen } from '../../common/types/pen/pen'
import Easel from './easel'


export default function Board({board, editor}:{board:IBoard; editor:(editedBoard:IBoard)=> void}) {

    const [thisBoard, setThisBoard] = useState(board)
    const [currentPixel, setCurrentPixel] = useState<number[] | null[]>([null,null])



    function editBoards() {

        // let pixels: IPixel[][] = [];
        // for (let j = 0; j < 16; j++) {
        //     let pixelRow: IPixel[] = [];
        //     for (let k = 0; k < 16; k++) {
        //         let id = Number(j.toString() + k.toString());
        //         pixelRow.push({ id: id, blank: true, color: "black", coordinates: [j,k]}); //change color to empty string later
        //     }
        //     pixels.push(pixelRow);
        // }
        // setThisBoard({...thisBoard, pixels: pixels})
        // editor({...thisBoard, pixels: pixels})
    }

    function paint(coordinates : number[]){
        setCurrentPixel(coordinates)
    }

    useEffect(()=>{
        if(currentPixel[0] !== null && currentPixel[1] !== null){
            console.log(currentPixel)
            let newBoard : IBoard = thisBoard;
            newBoard.pixels[currentPixel[0]][currentPixel[1]].color = Pen.getColor() 
            setThisBoard(newBoard)
            editor(newBoard)
        }
    },[currentPixel])

    useEffect(()=>{},[thisBoard])

  return (
    <div>Board {board.id || 0}
        <div className={style.board} onClick={editBoards}>
            {thisBoard.pixels.map((row:IPixel[]) => { return row.map(e => { return <Pixel onClick={paint} key={e.id} data={e}/>})})}
        </div>
        <Easel />

    </div>
  )
}
