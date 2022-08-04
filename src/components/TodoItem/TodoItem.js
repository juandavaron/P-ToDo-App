import React from "react";
import { TodoIcon } from "../TodoIcon/TodoIcon";

function TodoItem({
  text,
  completed,
  todos,
  setTodos
}) {
  // Completar ToDos
  const completeTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos[indexTodo].completed = true;
    setTodos(newTodos);
  };

  // Eliminar ToDos
  const deleteTodo = (text) => {
    setTodos(todos.filter(element => element.text !== text))
  };

  return (
    <li className="list__item">
      <TodoIcon
        type={'done'}
        completed={completed}
        completedTodo={() => completeTodo(text)}
      />
      <p
        className={`list__copy ${completed && 'complete'}`}
      >{text} </p>
      <TodoIcon
        type={'delete'}
        deletedTodo={() => deleteTodo(text)}
      />
    </li>
  )
}

export { TodoItem };