import React, {useState} from 'react';
import './App.css';
// import Timer from './components/Timer';
import Count from './components/Count'
import Button from './components/Button';

function App() {
  const [count, setCount]  = useState(0);

  return (
    <div>
      {/* <Timer/> */}
      <Count count={count} setCount={setCount}/>
      <Button count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
