import React from 'react';
import Todo from './Todo';

const TodoList =({ todos, handleToggleTodo, handleRemoveTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleTodo={() => handleToggleTodo(todo.id)}
            removeTodo={() => handleRemoveTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
