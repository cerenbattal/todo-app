const inprogresses = (state = [], action) => {
  switch (action.type) {
    case "MOVE_INPROGRESS":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          isDone: false,
          isInProgress: true,
        },
      ];
    case "DELETE_INPROGRESS":
      return [...state.filter((todo) => todo.text !== action.payload.text)];
    default:
      return state;
  }
};

export default inprogresses;
