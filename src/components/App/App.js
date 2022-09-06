import React from "react";
import './../../style/App.scss';
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Toggle theme', completed: false },
//   { text: 'Styles icons', completed: false },
//   { text: 'Styles buttons', completed: false },
//   { text: 'localStorage', completed: false },
//   { text: 'breackpoints', completed: false },
//   { text: 'Opcional: Crear Toggle completed Todos', completed: false },
//   { text: 'LALALAND', completed: false }
// ]

function App() {
  // Estado
  const [inputText, setInputText] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = React.useState('all');
  const [todosFilter, setTodosFilter] = React.useState([]);
  const [theme, setTheme] = React.useState('false');

  // Efecto
  React.useEffect(() => {
    getTodos();
    // console.log(localStorage)
  }, []);
  
  React.useEffect(() => {
    filterTodos();
    saveTodos();
    console.log(localStorage)
  }, [todos, status]);

  React.useEffect(() => {
    toggleTheme();
  }, [theme]);

  // Filtro y establecer todos como todosFilter
  const filterTodos = () => {
    switch (status) {
      case 'completed':
        setTodosFilter(todos.filter(todo => todo.completed));
        break;
      case 'active':
        setTodosFilter(todos.filter(todo => !todo.completed));
        break;
      default:
        setTodosFilter(todos);
        break;
    }
  }

  // Local Storage
  const saveTodos = () => {
    localStorage.setItem('TODOS_V1', JSON.stringify(todos));
  };

  const getTodos = () => {
    if (localStorage.getItem('TODOS_V1') === null) {
      localStorage.setItem('TODOS_V1', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('TODOS_V1'));
      setTodos(todoLocal);
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    const body = document.getElementById('body');
    if (!theme) {
      body.classList.add('light')
    } else {
      body.classList.remove('light')
    };
  };

  return (
    <AppUI
      todos={todos}
      setTodos={setTodos}
      inputText={inputText}
      setInputText={setInputText}
      setStatus={setStatus}
      todosFilter={todosFilter}
      setTheme={setTheme}
      theme={theme}
    />
  );
}

export default App;
