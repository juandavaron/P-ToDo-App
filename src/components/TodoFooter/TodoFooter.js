import React from "react";
// import './TodoFooter.scss'

function TodoFooter({theme}) {
  return (
    <footer className="footer">
      <p className={`footer__text ${!theme && 'light'}`}>Hecho con 🧡 por <a target='_blank' href="https://www.linkedin.com/in/juanvarong/">Juan Varón</a></p>
    </footer>
  )
};

export { TodoFooter };