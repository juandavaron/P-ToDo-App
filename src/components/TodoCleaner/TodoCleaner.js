import React from "react";

function TodoCleaner({
  className,
  todos,
  setTodos
}) {

  const cleanerTodos = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  return (
    <div
      className={className}
    >
      <button
        onClick={cleanerTodos}
      >Clear Completed</button>
    </div>
  )
};

export { TodoCleaner };