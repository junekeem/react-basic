import React, { useState } from 'react';
import './AppXY.css';
import Pointer from "./components/Pointer";

export default function AppXY() {
  const [coordinate, setCoordinate] = useState({ coordinateX: 0, coordinateY: 0 });
  const handleCoordinate = (event) => {
    setCoordinate({
      coordinateX: event.clientX,
      coordinateY: event.clientY
    });
  }

  return (
    <div className='container' onMouseMove={handleCoordinate}>
      <Pointer coordinate={coordinate}/>
    </div>
  );
}
