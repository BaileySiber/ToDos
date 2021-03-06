import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';


import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import { toggleTodo } from '../actions/index';
import { removeTodo } from '../actions/index';


let id = 0;

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    removeTodoClick: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

let TodoApp = ({ todos, addTodoClick, toggleTodoClick, removeTodoClick }) => {
  return (
    <div>
      <InputLine
        addTodo={(task) => addTodoClick(id++, task)}
      />
      <TodoList
        todos={todos}
        handleToggleTodo={(id) => toggleTodoClick(id)}
        handleRemoveTodo={(id) => removeTodoClick(id)}
      />
    </div>
  );
}


TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
