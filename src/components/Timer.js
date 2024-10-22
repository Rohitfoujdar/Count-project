import React, { useState } from "react";

export default function Timer(){
  const [count, setCount]  = useState(0);
  
  const start = () =>{
     setInterval(() => {
      setCount((prevCount)=>prevCount+1);
     }, 1000);
 }

 const Reset = () =>{
  setCount(0);
 }

 const Pause = () =>{
  
 }

  return(
        <div className="container">
          <h3>Count:{count}</h3>
          <div className="btn-group  my-3" role="group" aria-label="Basic mixed styles example" >
           <button type="button" className="btn btn-danger" onClick={start}>Start</button>
           <button type="button" className="btn btn-success" onClick={Pause}>Pause</button>
           <button type="button" className="btn btn-warning" onClick={Reset}>Reset</button>
          </div> 
        </div>
    );
}