import React from "react";



function TodoCounter({ leftTodos, className }) {
  return (
    <div className={className}>
      <p
      >{leftTodos} items left</p>
    </div>
  )
};

export { TodoCounter };