import React from "react";
import { TodoIcon } from "../TodoIcon/TodoIcon";

function TodoItem({
  text,
  completed,
  todos,
  setTodos,
  theme
}) {
  // Completar ToDos
  const completeTodo = (text) => {
    // const indexTodo = todos.findIndex(todo => todo.text === text)
    // const newTodos = [...todos];
    // newTodos[indexTodo].completed = true;
    // setTodos(newTodos);

    setTodos(todos.map(element => {
      if(element.text === text) {
        return {...element, completed: !element.completed}
      }
      return element;
    }))
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
        theme={theme}
        completedTodo={() => completeTodo(text)}
      />
      <p
        className={`list__copy ${completed && 'complete'} ${!theme && 'light'}`}
      >{text} </p>
      <TodoIcon
        type={'delete'}
        theme={theme}
        deletedTodo={() => deleteTodo(text)}
      />
    </li>
  )
}

export { TodoItem };