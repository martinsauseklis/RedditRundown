import { myHistoryStyle, title, windowStyle, tr, table, th, arrowDown, arrowUp, firstCol, secondCol, thirdCol, secondTh, button, viewMore, plus, content, clearBtn, clearText } from "./styles/myHistoryStyle";

export const MyHistory = (props) => {
    return (
        <div style={myHistoryStyle}>
            <h1 style={title}>MY HISTORY</h1>
            <div style={windowStyle}>

                <table style={table}>
                    <tr style={tr}>
                        <th style={th}>
                            Upvotes
                        </th>
                        <th style={secondTh}>
                            <svg style={arrowUp}
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
                        </th>
                        <th style={secondTh}>
                        <svg style={arrowDown}
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
                        </th>
                    </tr>
                    <tr style={content}>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>1234</td>
                        <td style={thirdCol}>345</td>
                    </tr>
                    <tr style={content}>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>1234</td>
                        <td style={thirdCol}>345</td>
                    </tr>
                    <tr>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>1234</td>
                        <td style={thirdCol}>345</td>
                    </tr>
                </table>
                <button style={button}>
                    <svg style={plus} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5857 10.2857C17.5857 9.45729 16.9141 8.78571 16.0857 8.78571C15.2573 8.78571 14.5857 9.45729 14.5857 10.2857H17.5857ZM14.5857 23.5429C14.5857 24.3713 15.2573 25.0429 16.0857 25.0429C16.9141 25.0429 17.5857 24.3713 17.5857 23.5429H14.5857ZM9.45714 15.4143C8.62872 15.4143 7.95714 16.0859 7.95714 16.9143C7.95714 17.7427 8.62872 18.4143 9.45714 18.4143V15.4143ZM22.7143 18.4143C23.5427 18.4143 24.2143 17.7427 24.2143 16.9143C24.2143 16.0859 23.5427 15.4143 22.7143 15.4143V18.4143ZM29.5 16.5C29.5 23.6797 23.6797 29.5 16.5 29.5V32.5C25.3366 32.5 32.5 25.3366 32.5 16.5H29.5ZM16.5 29.5C9.3203 29.5 3.5 23.6797 3.5 16.5H0.5C0.5 25.3366 7.66344 32.5 16.5 32.5V29.5ZM3.5 16.5C3.5 9.3203 9.3203 3.5 16.5 3.5V0.5C7.66344 0.5 0.5 7.66344 0.5 16.5H3.5ZM16.5 3.5C23.6797 3.5 29.5 9.3203 29.5 16.5H32.5C32.5 7.66344 25.3366 0.5 16.5 0.5V3.5ZM14.5857 10.2857V16.9143H17.5857V10.2857H14.5857ZM14.5857 16.9143V23.5429H17.5857V16.9143H14.5857ZM9.45714 18.4143H16.0857V15.4143H9.45714V18.4143ZM16.0857 18.4143H22.7143V15.4143H16.0857V18.4143Z" fill="#366AF0"/>
                    </svg>

                    <p style={viewMore}>View more</p>
                </button>
            </div>

            <div style={{...windowStyle, marginTop: 15}}>

                <table style={table}>
                    <tr style={tr}>
                        <th style={th}>
                            Downvotes
                        </th>
                        <th style={secondTh}>
                            <svg style={arrowUp}
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
                        </th>
                        <th style={secondTh}>
                        <svg style={arrowDown}
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
                        </th>
                    </tr>
                    <tr style={content}>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>1234</td>
                        <td style={thirdCol}>345</td>
                    </tr>
                    <tr style={content}>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>1234</td>
                        <td style={thirdCol}>345</td>
                    </tr>
                    <tr>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>1234</td>
                        <td style={thirdCol}>345</td>
                    </tr>
                </table>
                <button style={button}>
                    <svg style={plus} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5857 10.2857C17.5857 9.45729 16.9141 8.78571 16.0857 8.78571C15.2573 8.78571 14.5857 9.45729 14.5857 10.2857H17.5857ZM14.5857 23.5429C14.5857 24.3713 15.2573 25.0429 16.0857 25.0429C16.9141 25.0429 17.5857 24.3713 17.5857 23.5429H14.5857ZM9.45714 15.4143C8.62872 15.4143 7.95714 16.0859 7.95714 16.9143C7.95714 17.7427 8.62872 18.4143 9.45714 18.4143V15.4143ZM22.7143 18.4143C23.5427 18.4143 24.2143 17.7427 24.2143 16.9143C24.2143 16.0859 23.5427 15.4143 22.7143 15.4143V18.4143ZM29.5 16.5C29.5 23.6797 23.6797 29.5 16.5 29.5V32.5C25.3366 32.5 32.5 25.3366 32.5 16.5H29.5ZM16.5 29.5C9.3203 29.5 3.5 23.6797 3.5 16.5H0.5C0.5 25.3366 7.66344 32.5 16.5 32.5V29.5ZM3.5 16.5C3.5 9.3203 9.3203 3.5 16.5 3.5V0.5C7.66344 0.5 0.5 7.66344 0.5 16.5H3.5ZM16.5 3.5C23.6797 3.5 29.5 9.3203 29.5 16.5H32.5C32.5 7.66344 25.3366 0.5 16.5 0.5V3.5ZM14.5857 10.2857V16.9143H17.5857V10.2857H14.5857ZM14.5857 16.9143V23.5429H17.5857V16.9143H14.5857ZM9.45714 18.4143H16.0857V15.4143H9.45714V18.4143ZM16.0857 18.4143H22.7143V15.4143H16.0857V18.4143Z" fill="#366AF0"/>
                    </svg>

                    <p style={viewMore}>View more</p>
                </button>
            </div>
            <button style={clearBtn}><p style={clearText}>CLEAR MY HISTORY</p></button>
        </div>
    );
}