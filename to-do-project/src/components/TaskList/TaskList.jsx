import Task from "../Task/Task";
import { useState } from "react";
import AddTask from "../AddTask/AddTask";

export default function TaskList() {
  const [list, setList] = useState([]);

  const handleAdd = (task) => {
    setList(prev => [...prev, task]);
  }
  const handleUpdate = (updatedTask) => {
    setList(list.map(task => task.id === updatedTask.id ? updatedTask : task));
  }
  const handleDelete = (deletedTask) => {
    setList(list.filter(task => task.id !== deletedTask.id));
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
            <Task
              key={task.id}
              task={task}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />)}
        </ul>
        <AddTask onAdd={handleAdd}/>
      </section>
    </>
  )
}