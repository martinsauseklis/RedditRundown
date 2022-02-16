import { myHistoryStyle, title, windowStyle } from "./styles/myHistoryStyle";

export const MyHistory = (props) => {
    return (
        <div style={myHistoryStyle}>
            <h1 style={title}>MY HISTORY</h1>
            <div style={windowStyle}>
                <h2>Upvotes</h2>
                <h3>Lorem ipsum</h3>
                <h3>Lorem ipsum</h3>
                <h3>Lorem ipsum</h3>
                <button>View more</button>
            </div>
            <div>
                <h2>Downvotes</h2>
                <h3>Lorem ipsum</h3>
                <h3>Lorem ipsum</h3>
                <h3>Lorem ipsum</h3>
                <button>View more</button>
            </div>
            <button>Clear my history</button>
        </div>
    );
}