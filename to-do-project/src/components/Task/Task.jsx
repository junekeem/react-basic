import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Task({ task, onUpdate, onDelete }) {
  const { status, taskName } = task;
  const handleDelete = () => {
    onDelete(task);
  }
  const handleChange = (e) => {
    onUpdate({ ...task, status: e.target.checked });
  }

  return (
    <li>
      <input type='checkbox' id="status" checked={status} onChange={handleChange}/>
      <label htmlFor="status">{task.taskName}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt/>
      </button>
    </li>
  )
}