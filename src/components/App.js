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
  { text: 'LALALAND', completed: false }
]

function App() {
  // Estado de ToDos
  const [todos, setTodos] = React.useState(defaultTodos);

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

  // ToDos Restantes
  const leftTodos = todos.filter(todo => !todo.completed).length;

  return (
    <React.Fragment>
      <TodoHeader />

      <TodoAdd />

      <TodoList>
        {todos.map(createdTodo => (
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
      />

      <TodoFooter />
    </React.Fragment>
  );
}

export default App;
