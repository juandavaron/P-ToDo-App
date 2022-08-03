import React from "react";

function TodoCleaner({ className, cleanTodos }) {
  return (
    <div
      className={className}
    >
      <p
      onClick={cleanTodos}
      >Limpiador</p>
    </div>
  )
};

export { TodoCleaner };