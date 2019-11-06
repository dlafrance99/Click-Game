import React from "react";


function ImageCard(props) {
   
    return (
        <>
                <div className="card" onClick={()=>props.picked(props.id)}>
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                </div>
        </>
    )
}

export default ImageCard;