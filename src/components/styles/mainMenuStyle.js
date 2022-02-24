export const mainContainer = {
    position: "absolute",
    top: 130,
    left: 0,
    width: 428,
    height: 782,
    zIndex: 2
   
    
}

export const background = {
    position: "relative",
    backgroundColor: "#000000",
    opacity: "25%",
    
    width: "100%",
    height: "100%"
    
}
export const menuContainer = {
    position: "absolute",
    zIndex: 3,
    top: 0,
    height: 294,
    width: "100%",
}

export const ul = {
    position:"relative",
    margin: 0,
    padding: 0,
    width:"100%",
    height: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    backgroundColor: "#ffffff",
    opacity: "94%"
}

export const li = {
    width: 277,
    height: 89,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px dashed #000000"
}

export const liFirst = {
    ...li,
    marginTop: 12
}

export const liLast = {
    ...li, 
    borderBottom: "none"
}

export const liText = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
    textDecoration: "none",
    
}