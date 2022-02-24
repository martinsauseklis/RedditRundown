import { useEffect, useRef, useState, useCallback } from "react";
import { Article } from "./Article";
import { MyHistory } from "./MyHistory";
import { bodyStyle } from "./styles/bodyStyle";
import { Categories } from "./Categories";
import { About } from "./About";


export const Body = () => {

    



    return (
        <div style={bodyStyle}>
            <About />
            
        </div>
    );
}