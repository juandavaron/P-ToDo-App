import React from "react";
import './App.scss'
import { TodoHeader } from "./TodoHeader/TodoHeader"
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoFooter } from "./TodoFooter/TodoFooter";

const defaultTodos = [
  { text: 'Marcar como activo el filtro', completed: false },
  { text: 'Acabar el componente search', completed: false },
  { text: 'Comer', completed: false },
  { text: 'LALALAND', completed: false }
]

function App() {
  // Estado de ToDos
  const [todos, setTodos] = React.useState(defaultTodos);
  const [todosFiltered, setTodosFiltered] = React.useState(todos);

  // ToDos Restantes
  const leftTodos = todos.filter(todo => !todo.completed).length;

  // Completar ToDos
  const completeTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos[indexTodo].completed = true;
    setTodos(newTodos);
  };

  // Eliminar ToDos
  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
  };

  // Todos los ToDos
  const allTodos = () => {
    setTodosFiltered(todos)
  };

  // ToDos Activos
  const activeTodos = () => {
    setTodosFiltered(todos.filter(todos => todos.completed === false))
  }

  // ToDos Completados
  const checkTodos = () => {
    setTodosFiltered(todos.filter(todos => todos.completed === true))
  }

  // Limpiar ToDos
  const cleanTodos = () => {
    alert('Todos vacíos');
  }

  return (
    <React.Fragment>
      <TodoHeader />

      <TodoAdd />

      <TodoList>
        {todosFiltered.map(createdTodo => (
          <TodoItem
            key={createdTodo.text}
            text={createdTodo.text}
            completed={createdTodo.completed}
            completedTodo={() => completeTodo(createdTodo.text)}
            deletedTodo={() => deleteTodo(createdTodo.text)}
          />
        ))}
      </TodoList>

      <TodoSearch
        leftTodos={leftTodos}
        allTodos={allTodos}
        activeTodos={activeTodos}
        checkTodos={checkTodos}
        cleanTodos={cleanTodos}
      />

      <TodoFooter />
    </React.Fragment>
  );
}

export default App;
