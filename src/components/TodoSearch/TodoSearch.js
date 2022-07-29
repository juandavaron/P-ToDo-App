import React from "react";
import { TodoCleaner } from "../TodoCleaner/TodoCleaner";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import './TodoSearch.scss'

function TodoSearch({ leftTodos }) {
  return(
    <section className="search section">
      <TodoCounter
      leftTodos={leftTodos}
      className="search__leftTodos"
      />
      <TodoFilter
      className="search__filter"
      />
      <TodoCleaner
      className="search__cleaner"
      />
    </section>
  )
};

export { TodoSearch };