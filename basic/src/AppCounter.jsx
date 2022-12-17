import './App.css';
import Counter from "./components/Counter";
import { useState } from "react";

function AppCounter() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1);
  }

  return (
    <div className='container'>
      <div className='banner'>Total Count: {count} {count > 10 ? '🔥' : '❄'}</div>
      <div className='counters'>
        <Counter total={count} onClick={increment}/>
        <Counter total={count} onClick={increment}/>
      </div>
    </div>
  );
}

export default AppCounter;
