import { TODO_ADDED } from "./type";

export const todoAdded = (newTodo, createdAt) => ({
    type: TODO_ADDED,
    newTodo,
    createdAt,
})
