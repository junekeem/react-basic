import Task from "../Task";
import { useState } from "react";
import AddTask from "../AddTask/AddTask";

export default function TaskList() {
  const [list, setList] = useState([]);

  const handleAdd = (task) => {
    setList(prev => [...prev, task]);
  }

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
            <li key={task.id}><Task task={task}></Task></li>)}
        </ul>
      </section>

      <AddTask onAdd={handleAdd}/>
    </>
  )
}