import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTask.module.css'

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
    onAdd({ id: uuidv4(), status: 'active', taskName: input });
    setInput('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input}
        type="text"
        placeholder="add Task to do"
        value={input}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  )
}