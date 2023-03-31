import { useState } from "react";

const Counter = ({initialCount}) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev - 1);
    };

    const restart = () => {
        setCount(0);
    };

    const switchSigns = () => {
        setCount(prev => prev * -1);
    };

    return (
        <div>   
            <div>
            <h1>Count:</h1> <h3 data-testid="count">{count}</h3>
            </div>

            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={restart}>Restart</button>
                <button onClick={switchSigns}>Switch Signs</button>
            </div>      
        </div>
    );
};

export default Counter;
