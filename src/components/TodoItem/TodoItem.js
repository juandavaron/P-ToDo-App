import React from "react";
// import './TodoItem.scss'
import { TodoIcon } from "../TodoIcon/TodoIcon";

function TodoItem({ text, completed }) {
  const onComplete = () => {
    alert('Completado el ToDo ' + text);
  };

  const onDelete = () => {
    alert('Elminado el ToDo ' + text);
  };


  return (
    <li className="list__item">
      <TodoIcon
        type={'done'}
        onComplete={onComplete}
      />
      <p
        className={`list__copy ${ completed && 'complete'}`}
      >{text} </p>
      <TodoIcon
        type={'delete'}
        onDelete={onDelete}
      />
    </li>
  )
}

export { TodoItem };