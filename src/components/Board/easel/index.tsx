import React, { useState } from "react";
import { v4 } from "uuid";
import { Pen } from "../../../common/types/pen/pen";

export default function Easel() {

    return (
        <div>
            <input type="color" onChange={(event) => Pen.setColor(event.target.value)} />
        </div>
    );
}
