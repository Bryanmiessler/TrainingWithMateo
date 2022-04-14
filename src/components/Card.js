import React, { useState } from "react";
import './Card.css';


function Card() {

    const [text, setText] = useState('Esto es un cuadrado que no consume drogas');
    const drugsAlert = () => {
        // alert('Ojito con el vicio');
        setText('No fumes tkm');
    }
    return(
        <div className="SquareFather">
            <div onClick={drugsAlert} className="SquareSon">
                <h2 className="TextSquare">{ text }</h2>
            </div>
        </div>
    );   
}

export default Card;