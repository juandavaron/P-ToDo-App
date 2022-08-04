import React from "react";



function TodoCounter({
  todos,
  className
}) {
  // ToDos Restantes
  const leftTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className={className}>
      <p
      >{leftTodos} items left</p>
    </div>
  )
};

export { TodoCounter };