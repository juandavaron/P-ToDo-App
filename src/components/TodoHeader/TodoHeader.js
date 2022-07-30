import React from "react";
import './TodoHeader.scss';
import { TodoIcon } from '../TodoIcon/TodoIcon'

function TodoHeader() {
  const toggleTheme = () => {
    alert('Acabas de cambiar el tema')
  }

  return (
    <header className="header">
      <h1 className="header__title">TODO</h1>
      <TodoIcon
        className="header__button"
        type='lightTheme'
        theme={toggleTheme}
      />
    </header>
  )
}

export { TodoHeader }