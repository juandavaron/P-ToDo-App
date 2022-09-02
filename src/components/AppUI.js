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
  todosFilter,
  setTheme,
  theme
}) {
  return (
    <React.Fragment>
      <TodoHeader
        setTheme={setTheme}
        theme={theme}
      />
      <main>
        <TodoAdd
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          theme={theme}
        />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          todosFilter={todosFilter}
          theme={theme}
        />

        <TodoSearch
          todos={todos}
          setStatus={setStatus}
          setTodos={setTodos}
          theme={theme}
        />

      </main>


      <TodoFooter
        theme={theme}
      />
    </React.Fragment>
  )
};

export { AppUI };