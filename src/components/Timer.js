import React from "react";

export default function Timer(){
     
    return(
        <div className="container">
          <h3>Count: </h3>
          <div className="btn">
           <button>Start</button>
           <button>Pause</button>
           <button>Reset</button>
          </div>
        </div>
    );
}