import React from "react";
import { TodoCleaner } from "../TodoCleaner/TodoCleaner";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import './TodoSearch.scss'

function TodoSearch({ leftTodos, activeTodos, allTodos, checkTodos, cleanTodos }) {
  return(
    <section className="search section">
      <TodoCounter
      leftTodos={leftTodos}
      className="search__leftTodos"
      />
      <TodoFilter
      className="search__filter"
      allTodos={allTodos}
      activeTodos={activeTodos}
      checkTodos={checkTodos}
      />
      <TodoCleaner
      className="search__cleaner"
      cleanTodos={cleanTodos}
      />
    </section>
  )
};

export { TodoSearch };