import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import noteReducer from './reducers/notesReducers';
import { INotesState } from '@/types/notes/INoteState';
import { IUserState } from '@/types/user/IUserState';
import userReducer from './reducers/userReducers';
import rootSaga from './sagas/rootSaga';

export interface IStoreState {
  notes: INotesState,
  user: IUserState
}

const rootReducer = combineReducers({
  notes: noteReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];