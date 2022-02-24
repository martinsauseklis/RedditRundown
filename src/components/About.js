import { aboutStyle, frameStyle, headLine, paragraphStyle, title } from "./styles/aboutStyle"

export const About = props => {
    return (
    <div style={aboutStyle}>
        <h1 style={title}>ABOUT</h1>
        <div style={frameStyle}>
            <h2 style={headLine}>
                    SwipeIt
            </h2>
            <p style={paragraphStyle}>
                We are a group of innovative people who would like to improve content consumption on Reddit.
            </p>
                
        </div>
    </div>)
}