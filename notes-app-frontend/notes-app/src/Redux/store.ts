import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from './users/user.reducers';
import noteReducer from './notes/notes.reducers';
import { INotesState } from '@/types/notes/INoteState';
import { IUserState } from '@/types/user/IUserState';

export interface IStoreState {
  notes: INotesState,
  user: IUserState
}

const rootReducer = combineReducers({
  notes: noteReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];