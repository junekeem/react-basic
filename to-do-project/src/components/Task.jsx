import { useState } from "react";

export default function Task({ taskName }) {
  const [task, setTask] = useState({ id: 0, status: false, taskName: taskName ? taskName : '' });

  return (
    <>
      <input type='checkbox' id="status" onChange={e => setTask(
        prev => ({ id: Math.random() * 100, status: !task.status, taskName: prev.taskName })
      )}/>
      <label htmlFor="status">{taskName}</label>
      <button>Delete</button>
    </>
  )
}