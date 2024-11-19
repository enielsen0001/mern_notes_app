import { all } from 'redux-saga/effects';
import notesSaga from './notesSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all([notesSaga(), userSaga()]);
}