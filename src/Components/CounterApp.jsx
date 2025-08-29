import React from "react";
import "./CounterApp.css";
import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="counter_container">
        <h1>Counter App</h1>
        <div className="count_display">{count}</div>

        <div className="button_group">
          <button onClick={()=>setCount(count-1)} className="btn decrement">-</button>
          <button onClick={()=>setCount(0)} className="btn reset">Reset</button>
          <button onClick={()=> setCount(count+1)} className="btn increment">+</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
