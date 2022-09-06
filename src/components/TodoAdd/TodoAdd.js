import React from "react";


function TodoAdd({
  setInputText,
  inputText,
  setTodos,
  todos,
  theme
}) {
  // Input listener
  const inputTextHandler = (event) => {
    setInputText(event.target.value)
  };

  // Agregar ToDos
  const addTodo = (event) => {
    event.preventDefault(); // Previene que se recargue la página.

    setTodos([...todos, { text: inputText, completed: false }]);
    setInputText('');
  };

  return (
    <section className={`add section ${!theme && 'light'}`} id="add">
      <form className="add__form">
        <button
          className="add__button"
          type="submit"
          onClick={addTodo}
        />
        <input
          className={`add__input ${!theme && 'light'}`}
          placeholder="Create a new todo..."
          onChange={inputTextHandler}
          value={inputText}
        />
      </form>
    </section>
  )
};

export { TodoAdd };