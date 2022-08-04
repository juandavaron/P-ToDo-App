import React from "react";
import './TodoList.scss';
import { TodoItem } from "../TodoItem/TodoItem";

function TodoList({
  todos,
  setTodos,
  todosFilter
}) {
  return(
    <section className="list section">
      <ul className="list__todo">
        {todosFilter.map(createdTodo => (
          <TodoItem
            key={createdTodo.text}
            text={createdTodo.text}
            completed={createdTodo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </section>
  )
};

export { TodoList };