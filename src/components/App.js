import React from "react";
import './App.scss'
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: 'Toggle theme', completed: false },
  { text: 'Styles icons', completed: false },
  { text: 'Styles buttons', completed: false },
  { text: 'localStorage', completed: false },
  { text: 'breackpoints', completed: false },
  { text: 'Opcional: Crear Toggle completed Todos', completed: false },
  { text: 'LALALAND', completed: false }
]

function App() {
  // Estado
  const [todos, setTodos] = React.useState(defaultTodos);
  const [inputText, setInputText] = React.useState('');
  const [status, setStatus] = React.useState('all');
  const [todosFilter, setFilter] = React.useState([]);

  // Efecto
  React.useEffect(() => {
    filterTodos();
  }, [todos, status])

  const filterTodos = () => {
    switch (status) {
      case 'completed':
        setFilter(todos.filter(todo => todo.completed));
        break;
      case 'active':
        setFilter(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilter(todos);
        break;
    }
  }

  return (
    <AppUI
      todos={todos}
      setTodos={setTodos}
      inputText={inputText}
      setInputText={setInputText}
      setStatus={setStatus}
      todosFilter={todosFilter}
    />
  );
}

export default App;
