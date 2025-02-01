import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Environments } from '@/constants/enums';

const exampleReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'example/action':
      return { ...state, updated: true };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    example: exampleReducer, 
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),

  devTools: process.env.NODE_ENV === Environments.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
