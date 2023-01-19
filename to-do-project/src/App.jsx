import './App.css';
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

const filters = ['all', 'active', 'completed']

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TaskList filter={filter}/>
    </>
  );
}

export default App;
