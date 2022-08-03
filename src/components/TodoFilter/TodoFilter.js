import React from "react";

function TodoFilter({ className, activeTodos, allTodos, checkTodos }){
  return(
    <div className={className}>
      <p
      onClick={allTodos}
      >All</p>
      <p
      onClick={activeTodos}
      >Active</p>
      <p
      onClick={checkTodos}
      >Completed</p>
    </div>
  )
};

export { TodoFilter };