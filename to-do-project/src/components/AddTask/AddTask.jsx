import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddTask({ onAdd }) {
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    onAdd({ id: uuidv4(), status: false, taskName: input });
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add Task to do"
        value={input}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  )
}