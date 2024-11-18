
import { ActionTypes, TNotesActions } from "./notes.actions";
import { INotesState } from "@/types/notes/INoteState";

const initialState: INotesState = {
    allNotes: [],
    selectedNoteId: null,
    noteAction: null,
    error: null,
    isLoading: false
}

const noteReducer = (state = initialState, action: TNotesActions) => {
    switch (action.type) {
        case ActionTypes.SET_NOTES:
            return { ...state, allNotes: action.notes };

        case ActionTypes.SET_SELECTED_ID:
            return { ...state, selectedNoteId: action.id };

        case ActionTypes.SET_CURRENT_ACTION:
            return { ...state, noteAction: action.currentAction };

        case ActionTypes.SET_ERROR:
            return { ...state, error: action.errorMsg };

        case ActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading };

        case ActionTypes.CLEAR:
            return { ...initialState };

        default:
            return state;
    }
};

export default noteReducer;