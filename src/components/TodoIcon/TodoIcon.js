import React from "react";
import { BsSunFill, BsCheck, BsXLg } from 'react-icons/bs';

function TodoIcon({
  theme,
  completed,
  completedTodo,
  deletedTodo,
  type
}) {
  // Seleccionar el ícono
  const iconTypes = {
    lightTheme: () => (
      <BsSunFill
        className="header__button-icon"
        onClick={theme}
      />
    ),
    darkTheme: 'dark-theme',
    add: 'add',
    done: () => (
      <BsCheck
        className={`list__button-done ${completed && 'complete'}`}
        onClick={completedTodo}
      />
    ),
    delete: () => (
      <BsXLg
        className="list__button-delete"
        onClick={deletedTodo}
      />
    ),
  }

  return (
    iconTypes[type]()
  )
};

export { TodoIcon };