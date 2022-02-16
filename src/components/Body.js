import { useEffect, useRef, useState, useCallback } from "react";
import { Article } from "./Article";
import { MyHistory } from "./MyHistory";
import { bodyStyle } from "./styles/bodyStyle";


export const Body = () => {

    



    return (
        <div style={bodyStyle}>
            <MyHistory />
            
        </div>
    );
}