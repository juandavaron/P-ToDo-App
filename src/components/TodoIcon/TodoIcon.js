import React from "react";
import { BsSunFill, BsTrash, BsCheck, BsXLg } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai'

function TodoIcon(props) {
  const iconTypes = {
    'lightTheme': () => (
      <BsSunFill className="header__button-icon" />
    ),
    darkTheme: 'dark-theme',
    add: 'add',
    done: () => (
      <BsCheck
        className="list__button-done"
        onClick={props.onComplete}
      />
    ),
    delete: () => (
      <BsXLg
        className="list__button-delete"
        onClick={props.onDelete}
      />
    ),
  }


  return (
    iconTypes[props.type]()
  )
};

export { TodoIcon };