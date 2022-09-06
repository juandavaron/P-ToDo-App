import React from "react";
import { TodoIcon } from '../TodoIcon/TodoIcon'

function TodoHeader({
  setTheme,
  theme,

}) {
  const toggleTheme = () => {
    setTheme(!theme);
  }

  return (
    <header className="header">
      <h1 className={`header__title ${!theme && 'light'}`}>TODO</h1>
      <TodoIcon
        className={`header__button ${!theme && 'light'}`}
        type={theme ? 'lightTheme' : 'darkTheme'}
        toggleTheme={toggleTheme}
      />
    </header>
  )
}

export { TodoHeader }