import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './TodoList';

export const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
  }
});
