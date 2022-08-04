import React from "react";
import { TodoCleaner } from "../TodoCleaner/TodoCleaner";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import './TodoSearch.scss'

function TodoSearch({
  todos,
  setStatus,
  setTodos
}) {
  return (
    <section className="search section">
      <TodoCounter
        todos={todos}
        className="search__leftTodos"
      />
      <TodoFilter
        className="search__filter"
        setStatus={setStatus}
      />
      <TodoCleaner
        className="search__cleaner"
        setTodos={setTodos}
        todos={todos}
      />
    </section>
  )
};

export { TodoSearch };