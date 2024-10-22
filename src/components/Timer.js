import React, { useState } from "react";

export default function Timer(){
  const [count, setCount]  = useState(0);
  const [timeId, setTimeId] = useState()
  const [pauses, setPauses] = useState([]);
  
  const start = () =>{
     let a = setInterval(() => {
      setCount((prevCount)=>prevCount+1);
     }, 1000);
     setTimeId(a)
 }

 const Reset = () =>{
  setCount(0);
  clearInterval(timeId)
 }

 const Pause = () =>{
  clearInterval(timeId);
  setPauses((prevPauses) => [
    ...prevPauses,
    { pauseNumber: prevPauses.length + 1, pauseCount: count }
  ]);
 }

  return(
        <div className="container">
          <h3>Count:{count}</h3>
          <div className="btn-group  my-3" role="group" aria-label="Basic mixed styles example" >
           <button type="button" className="btn btn-danger" onClick={start}>Start</button>
           <button type="button" className="btn btn-success" onClick={Pause}>Pause</button>
           <button type="button" className="btn btn-warning" onClick={Reset}>Reset</button>
          </div> 

         {pauses.length > 0 && (
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Pause Number</th>
                <th>Pause Count</th>
              </tr>
            </thead>
            <tbody>
              {pauses.map((pause) => (
                <tr>
                  <td>Pause {pause.pauseNumber}</td>
                  <td>{pause.pauseCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
         )}
        </div>
    );
}