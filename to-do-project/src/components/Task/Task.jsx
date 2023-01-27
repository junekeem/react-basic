import { FaTrashAlt } from "react-icons/fa";
import styles from './Task.module.css'

export default function Task({ task, onUpdate, onDelete }) {
  const { status, taskName } = task;
  const handleDelete = () => {
    onDelete(task);
  }
  const handleChange = (e) => {
    onUpdate({ ...task, status: e.target.checked ? 'completed' : 'active' });
  }

  return (
    <li className={styles.task}>
      <input className={styles.checkbox} type='checkbox' id="checkbox" checked={status === 'completed'} onChange={handleChange}/>
      <label className={styles.text} htmlFor="checkbox">{taskName}</label>
      <span className={styles.icon}>
      <button className={styles.button} onClick={handleDelete}>
        <FaTrashAlt/>
      </button>
      </span>
    </li>
  )
}