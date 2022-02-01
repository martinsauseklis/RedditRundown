import { articleStyle, frameStyle, headLine, paragraphStyle, upDownStyle } from "./styles/articleStyle";
import { useEffect, useRef, useState, useCallback } from "react";


export const Article = () => {

   
    const [height, setHeight] = useState();

    const myRef = useCallback(node => {
      if (node !== null) {
        setHeight(node.getBoundingClientRect().height);
      }
    },[]);

    
    
   
   
    
    return (
        <div id="article"  style={articleStyle}>
            
            <div ref={myRef} style={frameStyle}>
                <h2 style={headLine}>
                    {height}
                </h2>
                <p style={paragraphStyle}>
                Lorem   e2d 2ed 2ed2ed sectetur adipiscing elit. Maecenas aliquet sem quis consectetur tincidunt. Praesent nibh erat, tincidunt vitae vulputate vitae, consectetur in nisi. Ut consectetur nisl ac nisl tincidunt, in vestibulum tellus ultricies. Nunc nibh felis, interdum non sapien sed, efficitur imperdiet quam.                 
                Lorem ipsum dolor sit blblblblwefkooj GFGH GY Y CH VGHCFGYCYC GHVHGHC GHGH CGJHC HC Hiowejfjweofjiow jojwofwe  amet, consectetur adipiscing elit. Maecenas aliquet sem quis consectetur tincidunt. Praesent nibh erat, tincidunt vitae vulputate vitae, consectetur in nisi. Ut consectetur nisl ac nisl tincidunt, in vestibulum tellus ultricies. Nunc nibh felis, interdum non sapien sed, efficitur imperdiet quam.                 
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
                            2345
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
                        387
                    </p>
                </div>
            </div>
            
        </div>
    );
}