import Task from "../Task/Task";
import { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import styles from "./TaskList.module.css";

export default function TaskList({ filter }) {
  const [list, setList] = useState(readListFromLocalStorage);

  const handleAdd = (task) => {
    setList(prev => [...prev, task]);
  }
  const handleUpdate = (updatedTask) => {
    setList(list.map(task => task.id === updatedTask.id ? updatedTask : task));
  }
  const handleDelete = (deletedTask) => {
    setList(list.filter(task => task.id !== deletedTask.id));
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  const filtered = getFilteredList(list, filter);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filtered.map((task) =>
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

function readListFromLocalStorage() {
  const list = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
}

function getFilteredList(list, filter) {
  if (filter === 'all') {
    return list;
  }
  return list.filter((task) => task.status === filter);
}