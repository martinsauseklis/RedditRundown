import { articleStyle, frameStyle, headLine, paragraphStyle, upDownStyle } from "./styles/articleStyle";
import React, { useEffect, useRef, useState } from "react";


export const Article = () => {

    
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [upvotes, setUpvotes] = useState();
    const [downvotes, setDownvotes] = useState();
    const [isFetched, setIsFetched] = useState(false);
    
   



    useEffect(() => {
                   

        if(localStorage.getItem("data") === null) {
            fetch('https://www.reddit.com/.json?limit=100')
            .then(res => {
            return res.json()
            })
            .then(res => {
                
            return JSON.stringify(res)
                
            }).then(res => {
                localStorage.setItem("data", res);
                setIsFetched(true)
            })
        } else {setIsFetched(true)}
            
        
    }, []);

    useEffect(() => {
        const obj = JSON.parse(localStorage.getItem("data"));
        const dataArr = [];
         const randArt = function() {
            const random = Math.floor(Math.random() * dataArr.length);
            setTitle(dataArr[random].title);
            setBody(dataArr[random].body);
            setUpvotes(dataArr[random].upvotes);
            setDownvotes(dataArr[random].downvotes);
        }
        if (obj) {
            
            obj.data.children.forEach(el => {
                if (el.data.selftext !== ''){
                    dataArr.push({title: el.data.title, body: el.data.selftext, upvotes: el.data.ups, downvotes: Math.floor((el.data.ups/el.data.upvote_ratio - el.data.ups)) })
                }
                
            })
            
            if (!title && !body && !upvotes) {
                randArt();
            }
        
        
                
            
        }

        

        articleRef.current.addEventListener('click', randArt.bind(this))

        
        
        return articleRef.current.removeEventListener('click', randArt.bind(this))
        
    }, [isFetched])

    

    const articleRef = useRef();

  

    return (
        <div ref={articleRef} style={articleStyle}>
            <div style={frameStyle}>
                <h2 style={headLine}>
                  {title}
                </h2>
                <p style={paragraphStyle}>
                  {body}
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
                            {upvotes}
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
                        {downvotes ? `~${downvotes}` : ''}
                    </p>
                </div>
                
            </div>
            
        </div>
    );
} 