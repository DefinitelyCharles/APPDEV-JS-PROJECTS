import React, { useState } from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(c =>  c + 1);
    }
    const resetCounter = () => {
        setCount(c =>  c = 0);
    }
    const decrementCounter = () => {
        setCount(c =>  c - 1);
    }

    return(
        <div className="container">
            <p className="counter-container">
                {count}
            </p>
             
            <button 
            className="button-container-increment" 
            onClick={incrementCounter}>
                Increment
            </button>
            <button 
            className="button-container-reset" 
            onClick={resetCounter}>
                Reset
            </button>
            <button 
            className="button-containe-decrement" 
            onClick={decrementCounter}>
                Decrement
            </button>
        </div>
    )
}