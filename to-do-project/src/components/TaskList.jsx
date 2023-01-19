import Task from "./Task";
import { useState } from "react";

export default function TaskList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  return (
    <>
      <button>All</button>
      <button onClick={() => {
        setList(prevState => [prevState.filter((task) => task.status === false)])
      }}>Active
      </button>
      <button>Completed</button>

      <section>
        <ul>
          {list.map((task) =>
            <li key={task.id}><Task taskName={task}></Task></li>)}
        </ul>
      </section>

      <input value={input} onChange={(e) => {
        setInput(e.target.value)
      }}/>
      <button onClick={() => {
        if (!input.trim()) {
          return;
        }
        setList(prev => [...prev, input.trim()]);
      }}>Add
      </button>
    </>
  )
}