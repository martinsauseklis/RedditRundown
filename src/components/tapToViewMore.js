export const tapToViewMore = () => {

    const style = {
        position: "absolute",
        width: "428px",
        height: "189px",
        left: "0px",
        top: "740px",
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px dashed #000000",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none",
        zIndex: "1"
    }
    return (
        <div style={style}>
            Tap to view more
        </div>
    )
}