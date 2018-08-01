import React from 'react';

const Todo = ({task, completed, removeTodo, toggleTodo}) => {
  return (
    <li>
      <span onDoubleClick={removeTodo} onClick={toggleTodo}>
        {completed ? <strike> {task} </strike> : task}
      </span>
    </li>
  );
}

export default Todo;
