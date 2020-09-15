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

export const deleteToDo = (item) => ({
  type: "DELETE_TODO",
  payload: {
    id: item.id,
    text: item.text,
  },
});

export const moveInProgress = (item) => ({
  type: "MOVE_INPROGRESS",
  payload: {
    id: nextInProgressId++,
    text: item.text,
  },
});

export const deleteInProgress = (item) => ({
  type: "DELETE_INPROGRESS",
  payload: {
    id: item.id,
    text: item.text,
  },
});

export const moveDone = (item) => ({
  type: "MOVE_DONE",
  payload: {
    id: nextDoneId++,
    text: item.text,
  },
});

export const deleteDone = (item) => ({
  type: "DELETE_DONE",
  payload: {
    id: item.id,
    text: item.text,
  },
});
