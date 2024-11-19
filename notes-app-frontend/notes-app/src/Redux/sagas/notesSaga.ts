import { NotesActionTypes, TNotesSagaActions } from "../actions/notesActions";
import { takeLatest } from 'redux-saga/effects';

function* getNotesSaga(action: TNotesSagaActions) {
    //const userId = action.payload;

    try {

    } catch (error) {

    }
  }

  function* addNoteSaga(action: TNotesSagaActions) {


    try {

    } catch (error) {

    }
  }

  function* editNoteSaga(action: TNotesSagaActions) {


    try {

    } catch (error) {

    }
  }

  function* deleteNoteSaga(action: TNotesSagaActions) {


    try {

    } catch (error) {

    }
  }

export default function* notesSaga() {
    yield takeLatest(NotesActionTypes.GET_NOTES, getNotesSaga);
    yield takeLatest(NotesActionTypes.ADD_NOTE, addNoteSaga);
    yield takeLatest(NotesActionTypes.EDIT_NOTE, editNoteSaga);
    yield takeLatest(NotesActionTypes.DELETE_NOTE, deleteNoteSaga);
}