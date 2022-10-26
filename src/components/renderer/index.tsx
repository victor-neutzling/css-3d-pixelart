import { relative } from 'path'
import React from 'react'
import IBoard from '../../common/types/IBoard'
import IPixel from '../../common/types/IPixel'
import style from './Renderer.module.css'
import { Property } from '../../../node_modules/csstype'

export default function Renderer({boards}:{boards:IBoard[]}) {
  return (
    <div className={style.renderer}>
      {boards.map((board:IBoard, index: number)=>(
        <div className={style.pixelWrapper}
        style={{
          position: 'absolute',
          marginLeft: index*10,
          marginTop: (index*10),

        }}
        >
          {board.pixels.map((pixelArray:IPixel[], index2)=>{ 
            return pixelArray.map((pixel:IPixel, index3)=>(
              <div className={style.pixel} style={{
                backgroundColor: pixel.color,
                position: 'relative',
                
                zIndex: (16-index2)*(16-index3) ,
                boxShadow: pixel.color? [`-1px -1px ${pixel.color}`, `-2px -2px ${pixel.color}`, `-3px -3px ${pixel.color}`, `-4px -4px ${pixel.color}`, `-5px -5px ${pixel.color}`, `-6px -6px ${pixel.color}`, `-7px -7px ${pixel.color}`, `-8px -8px ${pixel.color}`, `-9px -9px ${pixel.color}`, `-10px -10px ${pixel.color}`] as unknown as Property.BoxShadow : undefined,
              }}></div>
          ))
        })}
        </div>
      ))}

    </div>
  )
}
