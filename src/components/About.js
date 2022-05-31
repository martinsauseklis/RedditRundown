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
                Just a project from Codecademy.
            </p>
                
        </div>
    </div>)
}