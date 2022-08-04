import React from "react";
import './TodoAdd.scss';


function TodoAdd({ setInputText, inputText, setTodos, todos }) {
  // Input listener
  const inputTextHandler = (event) => {
    console.log(event.target.value)
    setInputText(event.target.value)
  };

  // Agregar ToDos
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, {text: inputText, completed: false}]);
    setInputText('');
  };

  return (
    <section className="add section" id="add">
      <form className="add__form">
        <button
          className="add__button"
          type="submit"
          onClick={addTodo}
        />
        <input
          className="add__input"
          placeholder="Create a new todo..."
          onChange={inputTextHandler}
          value={inputText}
        />
      </form>
    </section>
  )
};

export { TodoAdd };