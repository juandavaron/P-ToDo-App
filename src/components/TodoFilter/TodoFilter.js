import React from "react";

function TodoFilter({
  className,
  setStatus,
}) {

  // Establece status con el valor del boton clickeado.
  const filterHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className={className} onClick={filterHandler}>
      <button
        value='all'
        className={`&{}`}
      >All</button>
      <button
        value='active'
        className={`&{}`}
      >Active</button>
      <button
        value='completed'
        className={`&{}`}
      >Completed</button>
    </div>
  )
};

export { TodoFilter };