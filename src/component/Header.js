import React from 'react';

function Header (props){
    return (
        <>
        <header className="header">
            <h1 className="float">
                Clicky Game
            </h1>
            <h2 className="float">
                Click an Image to Begin!
            </h2>
            <h2 className="float">
                Score: {props.count} | High Score: {props.highCount}
            </h2>
        </header>

        <div className="description">
            <h2>
                Clicky Game!
            </h2>
            <h4>
                Click on an image to earn points, but don't click on the same image twice!
            </h4>
        </div>
        </>
    )
}

export default Header;