import { useState } from "react";

export default function Task({ task }) {
  // const [task, setTask] = useState({ id: task.id, status: task.status, taskName: task.taskName });

  return (
    <>
      <input type='checkbox' id="status" onChange={() => {
      }}/>
      <label htmlFor="status">{task.taskName}</label>
      <button>Delete</button>
    </>
  )
}