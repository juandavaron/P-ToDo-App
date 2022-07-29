import React from "react";
import './TodoAdd.scss';


function TodoAdd() {
  return (
    <section className="add section" id="add">
      <form className="add__form">
        <button className="add__button" type="submit"></button>
        <input
          className="add__input"
          placeholder="Create a new todo..."
        />
      </form>
    </section>
  )
};

export { TodoAdd };