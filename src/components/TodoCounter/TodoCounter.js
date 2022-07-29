import React from "react";



function TodoCounter({ leftTodos, className }){
  return(
    <p
    className={className}
    >{leftTodos} items left</p>
  )
};

export { TodoCounter };