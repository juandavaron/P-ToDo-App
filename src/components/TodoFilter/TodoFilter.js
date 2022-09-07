import React from "react";

function TodoFilter({
  className,
  setStatus,
  status
}) {

  // Establece status con el valor del botón clickeado.
  const filterHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className={className} onClick={filterHandler}>
      <button
        value='all'
        className={`${className} ${status == 'all' && 'active'}`}
      >All</button>
      <button
        value='active'
        className={`${className} ${status == 'active' && 'active'}`}
      >Active</button>
      <button
        value='completed'
        className={`${className} ${status == 'completed' && 'active'}`}
      >Completed</button>
    </div>
  )
};

export { TodoFilter };