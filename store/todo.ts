import { TodoType } from "../types/data";

//* 액션타입 정의
const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

//* 액션 생성자 정의
const setTodo = (payload: TodoType[]) => {
  return {
    type: INIT_TODO_LIST,
    payload,
  };
};

export const todoActions = { setTodo };

interface TodoReduxState {
  todos: TodoType[];
}

//* 초기 상태
const initialState: TodoReduxState = {
  todos: [],
};

//* 리듀서
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INIT_TODO_LIST:
      Object.assign(state, { todos: action.payload });
      return state;
    default:
      return state;
  }
}
