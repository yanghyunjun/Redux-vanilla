const add = "ADD";
const del = "DELETE";

export const addTodo = (text) => {
  return {
    type: add,
    text,
  };
};

export const delTodo = (id) => {
  return {
    type: del,
    id,
  };
};

const reducers = (state = ["number"], action) => {
  switch (action.type) {
    case add:
      return [{ text: action.text, id: Date.now() }, ...state];
    case del:
    // return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

export default reducers;
