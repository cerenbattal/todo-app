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
    case "DELETE_TODO":
      return [...state.filter((todo) => todo.text !== action.payload.text)];
    default:
      return state;
  }
};

export default todos;
