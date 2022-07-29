import React from "react";
import './App.scss'
import { TodoHeader } from "./TodoHeader/TodoHeader"
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoFooter } from "./TodoFooter/TodoFooter";

const defaultTodos = [
  { text: 'Crear App', completed: false },
  { text: 'Mostrar al mundo', completed: false },
  { text: 'Comer', completed: true },
  { text: 'LALALALAA', completed: false }
]

function App() {
  // Estado de ToDos
  const [todos, setTodos] = React.useState(defaultTodos);

  // Completar ToDos
  const completeTodo = () =>{

  }

  // Eliminar ToDos

  // ToDos Restantes
  const leftTodos = todos.filter(todo => !todo.completed).length;

  return (
    <>
      {/* Header */}
      <TodoHeader />

      {/* Add */}
      <TodoAdd />

      {/* List */}
      <TodoList>
        {/* Item */}
        {defaultTodos.map(defaultTodo => (
          <TodoItem
          text={defaultTodo.text}
          completed={defaultTodo.completed}
          />
        ))}
      </TodoList>

      {/* Filter */}
      <TodoSearch
        leftTodos={leftTodos}
      />

      {/* Footer */}
      <TodoFooter />
    </>
  );
}

export default App;
