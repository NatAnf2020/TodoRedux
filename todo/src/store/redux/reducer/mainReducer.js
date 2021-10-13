import initialState from "../../initialState";

const setPersist = (items) => {
  window.localStorage.setItem("todos2", JSON.stringify(items));
  return { items: items ? items : [] };
};

export const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case "PERSIST_TODOS":
      const items = JSON.parse(window.localStorage.getItem("todos2"));
      return { ...state, items: items ? items : [] };

    case "ADD_TODO":
      const newItem = { text: action.payload, completed: false };
      const todos2 = state.items.concat(newItem);

      if (action.payload) {
        window.localStorage.setItem("todos2", JSON.stringify(todos2));
        return { ...state, text: "", items: todos2 };
      }
      return state;

    case "DELETE_TODO":
      const todo3 = state.items.filter((todo, i) => i !== action.payload);
      setPersist(todo3);

      return {
        ...state,
        items: todo3,
      };

    case "TAGGLE_TODO":
      const todo4 = state.items.map((item, i) =>
        i === action.payload ? { ...item, completed: !item.completed } : item
      );

      setPersist(todo4);
      return {
        ...state,
        items: todo4,
      };

    case "DELETE_ALL":
      setPersist([]);
      return { ...state, items: [], text: "" };

    default:
      return state;
  }
};
