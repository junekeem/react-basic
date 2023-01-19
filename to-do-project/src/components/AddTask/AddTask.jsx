import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [input, setInput] = useState('');

  return (
    <>
      <input value={input} onChange={(e) => {
        setInput(e.target.value)
      }}/>
      <button onClick={() => {
        if (!input.trim()) {
          return;
        }
        onAdd(input.trim());
      }}>Add
      </button>
    </>
  )
}