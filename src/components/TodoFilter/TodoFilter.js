import React from "react";

function TodoFilter({ className }){
  return(
    <div className={className}>
      <p>All</p>
      <p>Active</p>
      <p>Completed</p>
    </div>
  )
};

export { TodoFilter };