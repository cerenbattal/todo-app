const dones = (state = [], action) => {
  switch (action.type) {
    case "MOVE_DONE":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          isDone: false,
          isInProgress: true,
        },
      ];
    case "DELETE_DONE":
      return [...state.filter((todo) => todo.text !== action.payload.text)];
    default:
      return state;
  }
};

export default dones;
