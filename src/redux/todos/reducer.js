import { TODO_ADDED } from "./type";

const initialState = [];

// 1. reducer adalah gerbang untuk mengubah redux store.
// 2. redux store adalah state seperti di react namun
// sifatnya global (seluruh component bisa akses).
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TODO_ADDED:
      return [
        ...state,
        { content: action.newTodo, createdAt: action.createdAt },
      ]; // nambah new todo ke akhir array
    default:
      return state;
  }
}
