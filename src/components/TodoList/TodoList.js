import React from "react";
import './TodoList.scss'

function TodoList(props) {
  return(
    <section className="list section">
      <ul className="list__todo">
        {props.children}
      </ul>
    </section>
  )
};

export { TodoList };