import React, {useRef, useState} from "react";

export default function Button({count, setCount}){
    
  const intervalRef = useRef();

    const start = () =>{
       intervalRef.current = setInterval(() => {
         setCount((prevDATA)=>prevDATA+1);
        }, 1000);
    }
   
    const Reset = () =>{
     setCount(0);
     clearInterval(intervalRef.current)
    }
   
    const Pause = () =>{
      clearInterval(intervalRef.current)
    }
    return(
     <div className="container">
        <div className="btn-group  my-1" role="group" aria-label="Basic mixed styles example" >
         <button type="button" className="btn btn-danger" onClick={start}>Start</button>
         <button type="button" className="btn btn-success" onClick={Pause}>Pause</button>
         <button type="button" className="btn btn-warning" onClick={Reset}>Reset</button>
        </div> 
      </div>
    );
    };