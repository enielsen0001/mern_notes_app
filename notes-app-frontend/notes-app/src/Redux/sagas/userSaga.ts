import { UserActionTypes } from "../actions/userActions";
import { takeLatest } from 'redux-saga/effects';


function* loginSaga() {
    try {

    } catch (error) {

    }
}
function* addUserSaga() {
    try {

    } catch (error) {

    }
}
function* editUserSaga() {
    try {

    } catch (error) {

    }
}

function* deleteUserSaga() {
    try {

    } catch (error) {

    }
}

export default function* userSaga() {
    yield takeLatest(UserActionTypes.LOGIN, loginSaga);
    yield takeLatest(UserActionTypes.ADD_USER, addUserSaga);
    yield takeLatest(UserActionTypes.EDIT_USER, editUserSaga);
    yield takeLatest(UserActionTypes.DELETE_USER, deleteUserSaga);
}