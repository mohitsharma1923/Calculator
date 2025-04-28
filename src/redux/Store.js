import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './RootReducer';

let store = configureStore({
  reducer: rootReducer
});

export { store };
