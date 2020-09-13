const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          isInProgress: false,
          isDone: false,
        },
      ];
    case ("DELETE_TODO", "MOVE_INPROGRESS"):
      return state.filter((todo) => todo.id === action.payload.id);
    default:
      return state;
  }
};

export default todos;
