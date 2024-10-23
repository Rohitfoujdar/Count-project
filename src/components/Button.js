import React, {useRef, useState} from "react";

export default function Button({count, setCount}){
     const [timerId, setTimerId] = useState();
     const [pauses, setPauses] = useState([]);
  // const intervalRef = useRef();

    // const start = () =>{
    //    intervalRef.current = setInterval(() => {
    //      setCount((prevDATA)=>prevDATA+1);
    //     }, 1000);
    // }

    const start = () =>{
      let a= setInterval(() => {
        setCount((prevDATA)=>prevDATA+1);
       }, 1000);
       setTimerId(a)
   }
   
    const Reset = () =>{
     setCount(0);
     clearInterval(timerId)
    }
   
    const Pause = () =>{
      clearInterval(timerId)
      setPauses((prevPauses) => [...prevPauses, {pauseNumber: prevPauses.length + 1, pauseCount: count}
      ]);

      }

    
    return(
     <div className="container">
        <div className="btn-group  my-1" role="group" aria-label="Basic mixed styles example" >
         <button type="button" className="btn btn-danger" onClick={start}>Start</button>
         <button type="button" className="btn btn-success" onClick={Pause}>Pause</button>
         <button type="button" className="btn btn-warning" onClick={Reset}>Reset</button>
        </div> 

        {pauses.length > 0 && (
          <table className="pause-table">
            <thead>
              <tr>
                <th>Pause Number</th>
                <th>Pause Count</th>
              </tr>
            </thead>
            <tbody>
              {pauses.map((pause) => (
               <tr> 
                <td>pause.{pause.pauseNumber}</td>
                <td>{pause.pauseCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
    };