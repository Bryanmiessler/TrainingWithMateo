import React, { useState } from "react";
import './Card.css';


function Card(props) {

    const [innerHeight, setInnerHeight] = useState(500);
    const [innerWidth, setInnerWidth] = useState(500);
    const [color, setColor] = useState('red');
    const [counter, setCounter] = useState(0);

    const squareCounter = () =>{
        if(counter < 5){
            setCounter(counter + 1);
        }else{
            return setCounter(0);
        };
        setInnerHeight(100);
        setInnerWidth(100);
        setColor('black');
    }
    return(
        <div className="SquareFather">
            <div onClick={squareCounter} className="SquareSon" style={{backgroundColor: color, height: innerHeight, width: innerWidth}}>
                <h2 className="TextSquare">{ counter }</h2>
                
            </div>
        </div>
    );   
}

export default Card;