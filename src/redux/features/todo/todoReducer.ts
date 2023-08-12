import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "./todoSlice";

export default function todoReducer() {
  return {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todos.push({
        id: state.todos.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      });
    },
    toggleTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    selectTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.selectedTodo = action.payload;
    },
    deselectTodo: (state: TodoState) => {
      state.selectedTodo = null;
    },
    deleteTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  };
}
