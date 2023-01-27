import './App.css';
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ['all', 'active', 'completed']

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TaskList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
