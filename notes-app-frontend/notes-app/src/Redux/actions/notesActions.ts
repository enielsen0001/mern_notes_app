import { INote } from "@/types/notes/INote";
import { TCurrentAction } from "@/types/notes/TCurrentAction";

export enum NotesActionTypes {
    SET_NOTES = 'SET_NOTES',
    SET_SELECTED_ID = 'SET_SELECTED_ID',
    SET_CURRENT_ACTION = 'SET_CURRENT_ACTION',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING',
    CLEAR = 'CLEAR',
    GET_NOTES = 'GET_NOTES',
    ADD_NOTE = 'ADD_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    DELETE_NOTE = 'DELETE_NOTE'
}

export type TNotesStateActions =
    { type: NotesActionTypes.SET_NOTES; notes: INote[]} |
    { type: NotesActionTypes.SET_SELECTED_ID; id: string } |
    { type: NotesActionTypes.SET_CURRENT_ACTION; currentAction: string} |
    { type: NotesActionTypes.SET_ERROR; errorMsg: string } |
    { type: NotesActionTypes.SET_IS_LOADING; isLoading: boolean } |
    { type: NotesActionTypes.CLEAR };

export type TNotesSagaActions =
    { type: NotesActionTypes.GET_NOTES } |
    { type: NotesActionTypes.ADD_NOTE; note: INote } |
    { type: NotesActionTypes.EDIT_NOTE; note: INote } |
    { type: NotesActionTypes.DELETE_NOTE; noteId: string };

// state action creators
export const setNotes = (notes: INote[]) => ({
    type: NotesActionTypes.SET_NOTES,
    notes: notes,
});

export const setSelectedId = (id: string) => ({
    type: NotesActionTypes.SET_SELECTED_ID,
    id: id,
});

export const setCurrentAction = (action: TCurrentAction) => ({
    type: NotesActionTypes.SET_CURRENT_ACTION,
    currentAction: action,
});

export const setError = (errorMsg: string) => ({
    type: NotesActionTypes.SET_ERROR,
    errorMsg: errorMsg,
});

export const setIsLoading = (isLoading: boolean) => ({
    type: NotesActionTypes.SET_ERROR,
    isLoading: isLoading
});

export const clearNotes = () => ({
    type: NotesActionTypes.CLEAR
});

// saga action creators
export const getNotes = () => ({
    type: NotesActionTypes.GET_NOTES
});

export const addNote = (note: INote) => ({
    type: NotesActionTypes.ADD_NOTE,
    note: note
});

export const editNote = (note: INote) => ({
    type: NotesActionTypes.EDIT_NOTE,
    note: note
});

export const deleteNote = (noteId: string) => ({
    type: NotesActionTypes.DELETE_NOTE,
    noteId: noteId
});