import React, { useState } from "react";

const Count= () =>{
    const [count,setCount]=useState(0);

    const increaseCount = () =>{
        setCount (count+1);
    };
    const decreaseCount = () =>{
        setCount(count-1);
    };

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick ={increaseCount}>Increase</button>
            <button onClick ={decreaseCount}>Decrease</button>
        </div>
    );
}
export default Count;