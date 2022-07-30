import React from "react";
// import './TodoItem.scss'
import { TodoIcon } from "../TodoIcon/TodoIcon";

function TodoItem({ text, completed, completedTodo, deletedTodo }) {

  return (
    <li className="list__item">
      <TodoIcon
        type={'done'}
        completed={completed}
        completedTodo={completedTodo}
      />
      <p
        className={`list__copy ${completed && 'complete'}`}
      >{text} </p>
      <TodoIcon
        type={'delete'}
        deletedTodo={deletedTodo}
      />
    </li>
  )
}

export { TodoItem };