import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

function TodoList({
  todos,
  setTodos,
  todosFilter,
  theme
}) {
  return(
    <section className={`list section ${!theme && 'light'}`}>
      <ul className="list__todo">
        {todosFilter.map(createdTodo => (
          <TodoItem
            key={createdTodo.text}
            text={createdTodo.text}
            completed={createdTodo.completed}
            todos={todos}
            setTodos={setTodos}
            theme={theme}
          />
        ))}
      </ul>
    </section>
  )
};

export { TodoList };