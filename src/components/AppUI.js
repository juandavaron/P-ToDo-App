import React from "react";
import { TodoHeader } from "./TodoHeader/TodoHeader"
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { TodoList } from "./TodoList/TodoList";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoFooter } from "./TodoFooter/TodoFooter";

function AppUI({
  todos,
  setTodos,
  inputText,
  setInputText,
  setStatus,
  todosFilter
}) {
  return (
    <React.Fragment>
      <TodoHeader />

      <TodoAdd
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        todosFilter={todosFilter}
      />

      <TodoSearch
        todos={todos}
        setStatus={setStatus}
        setTodos={setTodos}
      />

      <TodoFooter />
    </React.Fragment>
  )
};

export { AppUI };