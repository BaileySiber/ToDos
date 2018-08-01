const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    const newState = [ ...state ];
    const newTodo = {
      id: action.id,
      task: action.task,
      completed: action.completed
    };
    newState.push(newTodo);
    return newState
    case 'TOGGLE_TODO':
    const toggleState = [...state];
    const toggledState =  toggleState.map((todo) => {
      todo.completed = (todo.id === action.id) ? !todo.completed : todo.completed;
      return todo;
    });
    return toggledState;
    case 'REMOVE_TODO':
    const removeState = [...state];
    const removedState = removeState.filter((todo) => {
      if(todo.id !== action.id){return todo;}
    });
    return removedState;
    default:
    return state;
  }
};

export default reducer;
