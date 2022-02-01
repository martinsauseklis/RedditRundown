import { useEffect, useRef, useState, useCallback } from "react";
import { Article } from "./Article";
import { bodyStyle } from "./styles/bodyStyle";
import { tapToViewMore } from "./tapToViewMore";

export const Body = () => {

    



    return (
        <div style={bodyStyle}>
            <Article />
            {tapToViewMore()}
        </div>
    );
}