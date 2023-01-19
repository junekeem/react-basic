import { FaTrashAlt } from "react-icons/fa";

export default function Task({ task, onUpdate, onDelete }) {
  const { status, taskName } = task;
  const handleDelete = () => {
    onDelete(task);
  }
  const handleChange = (e) => {
    onUpdate({ ...task, status: e.target.checked ? 'completed' : 'active' });
  }

  return (
    <li>
      <input type='checkbox' id="checkbox" checked={status === 'completed'} onChange={handleChange}/>
      <label htmlFor="checkbox">{taskName}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt/>
      </button>
    </li>
  )
}