export const persistTodos = () => ({
  type: "PERSIST_TODOS",
});

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (key) => ({
  type: "DELETE_TODO",
  payload: key,
});
export const taggleTodo = (value) => ({
  type: "TAGGLE_TODO",
  payload: value,
});

export const deleteAll = () => ({
  type: "DELETE_ALL",
});
