import React, { useState } from "react";
import IPixel from "../../../common/types/IPixel";
import { Pen } from "../../../common/types/pen/pen";
import style from "./Pixel.module.css";

export default function Pixel({
    data,
    onClick,
}: {
    data: IPixel;
    onClick: (data:number[]) => void;
}) {

  const [thisData, setThisData] = useState(data)

    return (
        <div
        onClick={() => {setThisData({...thisData, color: Pen.getColor()}); onClick(thisData.coordinates)}}
            className={style.pixel}
            style={{ backgroundColor: thisData.color }}
        ></div>
    );
}
