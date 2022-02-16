import { articleStyle, frameStyle, headLine, paragraphStyle, upDownStyle } from "./styles/articleStyle";
import { useRef, useState, useCallback, useEffect } from "react";
import { articles } from "../resources/articleSource";




export const Article = () => {

    const style = {
        position: "fixed",
        width: "428px",
        height: "189px",
        left: "0px",
        top: "740px",
        background: "rgba(255, 255, 255, 0.97)",
        border: "1px dashed #000000",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none",
        zIndex: "1",
        display: "block"
    }

    const textStyle = {
        position: "relative",
        width: "428px",
        height: "155px",
        marginLeft: "0px",
        MarginTop: "771px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "30px",
        textAlign: "center",
        color: "#C5C0C0",
        
    }
    
   
   
    const [height, setHeight] = useState();
    
    const randomArticleId = obj => {
        return Math.floor((Math.random() * Object.keys(obj).length) + 1);
    }

    const randVal = randomArticleId(articles)


    const myRef = useCallback(node => {
      if (node !== null) {
        setHeight(node.getBoundingClientRect().height);
      }
    },[]);

    const tap = useRef();
    const article = useRef();

    const handleClick = () => {
        tap.current.style.display = "none"
        article.current.style.overflow = "visible"
    }
 
    const handleArticleClick = () => {
        if(tap.current.style.display === "none" && height > 782) {
            tap.current.style.display = "block"
        article.current.style.overflow = "hidden"
        }
    }
    
    useEffect(() => {
        height > 782 ? tap.current.style.display = "block" : tap.current.style.display = "none"
    }, [height])

    return (
        <div ref={article}  style={articleStyle}>
            <div ref={myRef} onClick={handleArticleClick}  style={frameStyle}>
                <h2 style={headLine}>
                    {articles[randVal].title}
                </h2>
                <p style={paragraphStyle}>
                    {articles[randVal].text}
                </p>
                <div style={upDownStyle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="36"
                        height="36"
                        fill="none"
                        viewBox="0 0 36 36"
                        >
                        <path
                            fill="url(#pattern0)"
                            d="M36 36H72V72H36z"
                            transform="rotate(180 36 36)"
                        ></path>
                        <defs>
                            <pattern
                            id="pattern0"
                            width="1"
                            height="1"
                            patternContentUnits="objectBoundingBox"
                            >
                            <use transform="scale(.01111)" xlinkHref="#image0_7_42"></use>
                            </pattern>
                            <image
                            id="image0_7_42"
                            width="90"
                            height="90"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACEElEQVR4nO3bv2pUQRiG8UeJBrMoNkbzh3TegJ2N1+KNeBFCbL0HBcHcgJ2kSSVYpogKgiAWRrQwH4Swm90zZ+Y9M7PvD75yZr/zwLLNHjAzMzMzs6FuTL3ANWbANsN2/H4xtsQMeAF8Bv4mzhfgFbAr3r0Z+8AJ6YGvzlfgqfQJGrABfCRf5Muxd4TPUb3n5I8ccyh8juq9o1zoM+FzLHRz6gUuPC549zZwv+D9K6kl9Fbh+2eF71+qltDdc2gRhxZxaBGHFnFoEYcWcWgRhxZxaBGHFnFoEYcWcWgRhxZxaBGHFnFoEYcWcWgRhxZxaBGHFnFoEYcWcWgRhxZxaBGHFnFoEYcW2ch0z13gQQV7LHIAbCae/QF8y7hLkofAe8q9FlHLnABPMjVLcjRnqV7nlPJvJsx1D/gzcNnW51lqrDE/hr+B8xHnW/Qz9eCY0L+A1yPOt+YDcDzVh98G3jL9V7r0fAL2MjVL1nvsKiKHXmNXFTn0FrvKyKGX2FVHDq3HbiJyaDV2U5FDa7GbjBxaid105FB77C4ih1pjdxU51Ba7y8ihlthdRw5Tx16LyGGq2GsVOahjr2XkoIq91pFD6diOfEmp2I48R+7YjnyNXLEdeQVjYzvyAKmxHTnB0NiOPMKqsR05g2WxHTmjRbEduYBN4CX///N3DrwBHk26UeduAXemXsLMzMzMzMr7B/nTfND0zQRLAAAAAElFTkSuQmCC"
                            ></image>
                        </defs>
                    </svg>
                    <p style={{marginLeft: 5,
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: 25,
                                lineHeight: '30px',
                                color: '#000000',
                                
                                
                                }}>
                            {articles[randVal].upvotes}
                    </p>
                    <svg style={{marginLeft: 21}}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="36"
                        height="36"
                        fill="none"
                        viewBox="0 0 36 36"
                        >
                        <path fill="url(#pattern0)" d="M0 0H36V36H0z"></path>
                        <defs>
                            <pattern
                            id="pattern0"
                            width="1"
                            height="1"
                            patternContentUnits="objectBoundingBox"
                            >
                            <use transform="scale(.01111)" xlinkHref="#image0_7_41"></use>
                            </pattern>
                            <image
                            id="image0_7_41"
                            width="90"
                            height="90"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACEElEQVR4nO3bv2pUQRiG8UeJBrMoNkbzh3TegJ2N1+KNeBFCbL0HBcHcgJ2kSSVYpogKgiAWRrQwH4Swm90zZ+Y9M7PvD75yZr/zwLLNHjAzMzMzs6FuTL3ANWbANsN2/H4xtsQMeAF8Bv4mzhfgFbAr3r0Z+8AJ6YGvzlfgqfQJGrABfCRf5Muxd4TPUb3n5I8ccyh8juq9o1zoM+FzLHRz6gUuPC549zZwv+D9K6kl9Fbh+2eF71+qltDdc2gRhxZxaBGHFnFoEYcWcWgRhxZxaBGHFnFoEYcWcWgRhxZxaBGHFnFoEYcWcWgRhxZxaBGHFnFoEYcWcWgRhxZxaBGHFnFoEYcW2ch0z13gQQV7LHIAbCae/QF8y7hLkofAe8q9FlHLnABPMjVLcjRnqV7nlPJvJsx1D/gzcNnW51lqrDE/hr+B8xHnW/Qz9eCY0L+A1yPOt+YDcDzVh98G3jL9V7r0fAL2MjVL1nvsKiKHXmNXFTn0FrvKyKGX2FVHDq3HbiJyaDV2U5FDa7GbjBxaid105FB77C4ih1pjdxU51Ba7y8ihlthdRw5Tx16LyGGq2GsVOahjr2XkoIq91pFD6diOfEmp2I48R+7YjnyNXLEdeQVjYzvyAKmxHTnB0NiOPMKqsR05g2WxHTmjRbEduYBN4CX///N3DrwBHk26UeduAXemXsLMzMzMzMr7B/nTfND0zQRLAAAAAElFTkSuQmCC"
                            ></image>
                        </defs>
                    </svg>
                    <p style={{marginLeft: 5,
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: 25,
                                lineHeight: '30px',
                                color: '#000000'}}>
                        {articles[randVal].downvotes}
                    </p>
                </div>
                
            </div>
            <div ref={tap} onClick={handleClick} style={style}>
                <p style={textStyle}>Tap top view more</p>
            </div>
        </div>
    );
} 

