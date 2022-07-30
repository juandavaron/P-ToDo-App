import React from "react";
import { BsSunFill, BsCheck, BsXLg } from 'react-icons/bs';

function TodoIcon(props) {
  // Seleccionar el ícono
  const iconTypes = {
    lightTheme: () => (
      <BsSunFill
        className="header__button-icon"
        onClick={props.theme}
      />
    ),
    darkTheme: 'dark-theme',
    add: 'add',
    done: () => (
      <BsCheck
        className={`list__button-done ${props.completed && 'complete'}`}
        onClick={props.completedTodo}
      />
    ),
    delete: () => (
      <BsXLg
        className="list__button-delete"
        onClick={props.deletedTodo}
      />
    ),
  }


  return (
    iconTypes[props.type]()
  )
};

export { TodoIcon };