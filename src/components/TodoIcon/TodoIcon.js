import React from "react";
import { BsSunFill, BsMoonFill, BsCheck, BsXLg } from 'react-icons/bs';

function TodoIcon({
  toggleTheme,
  completed,
  completedTodo,
  deletedTodo,
  type,
  className,
  theme
}) {
  // Seleccionar el ícono
  const iconTypes = {
    lightTheme: () => (
      <BsSunFill
        className={className}
        onClick={toggleTheme}
      />
    ),
    darkTheme: () => (
      <BsMoonFill
        className={className}
        onClick={toggleTheme}
      />
    ),
    add: 'add',
    done: () => (
      <BsCheck
        className={`list__button-done ${completed && 'complete'} ${!theme && 'light'}`}
        onClick={completedTodo}
      />
    ),
    delete: () => (
      <BsXLg
        className={`list__button-delete ${!theme && 'light'}`}
        onClick={deletedTodo}
      />
    ),
  }

  return (
    iconTypes[type]()
  )
};

export { TodoIcon };