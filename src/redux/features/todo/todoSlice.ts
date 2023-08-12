import { createSlice } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

export interface Todo {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  selectedTodo: Todo | null;
}

const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Description 2",
    completed: false,
  },
];

export const initialState: TodoState = {
  todos,
  selectedTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: todoReducer(),
});

export const { addTodo, toggleTodo, selectTodo, deselectTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
