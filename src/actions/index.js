let nextTodoId = 0;
let nextInProgressId = 0;
let nextDoneId = 0;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    id: nextTodoId++,
    text,
  },
});

export const moveInProgress = (item) => ({
  type: "MOVE_INPROGRESS",
  payload: {
    id: nextInProgressId++,
    text: item.text,
  },
});

export const deleteToDo = (id) => ({
  type: "DELETE_TODO",
  payload: {
    id: id,
  },
});
