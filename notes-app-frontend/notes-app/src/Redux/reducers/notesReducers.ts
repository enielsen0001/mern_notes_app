
import { NotesActionTypes, TNotesStateActions } from "../actions/notesActions";
import { INotesState } from "@/types/notes/INoteState";

const initialState: INotesState = {
    allNotes: [],
    selectedNoteId: null,
    noteAction: null,
    error: null,
    isLoading: false
}

const noteReducer = (state = initialState, action: TNotesStateActions) => {
    switch (action.type) {
        case NotesActionTypes.SET_NOTES:
            return { ...state, allNotes: action.notes };

        case NotesActionTypes.SET_SELECTED_ID:
            return { ...state, selectedNoteId: action.id };

        case NotesActionTypes.SET_CURRENT_ACTION:
            return { ...state, noteAction: action.currentAction };

        case NotesActionTypes.SET_ERROR:
            return { ...state, error: action.errorMsg };

        case NotesActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading };

        case NotesActionTypes.CLEAR:
            return { ...initialState };

        default:
            return state;
    }
};

export default noteReducer;