import React from "react";
import { TodoCleaner } from "../TodoCleaner/TodoCleaner";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoFilter } from "../TodoFilter/TodoFilter";
// import './TodoSearch.scss'

function TodoSearch({
  todos,
  setStatus,
  setTodos,
  theme
}) {
  return (
    <section className={`search section ${!theme && 'light'}`}>
      <TodoCounter
        todos={todos}
        className={`search__leftTodos`}
      />
      <TodoFilter
        className={`search__filter ${!theme && 'light'}`}
        setStatus={setStatus}
      />
      <TodoCleaner
        className={`search__cleaner ${!theme && 'light'}`}
        setTodos={setTodos}
        todos={todos}
      />
    </section>
  )
};

export { TodoSearch };