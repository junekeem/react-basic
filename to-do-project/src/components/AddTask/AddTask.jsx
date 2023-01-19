import { useState } from "react";

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
    onAdd({ id: 'unique', status: true, taskName: input });
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