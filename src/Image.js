import React from "react";

const Image = (props) => {
    console.log(props)
    return (
    <img src={props.image} alt = "nasa photo"></img> 
    )
}

export default Image