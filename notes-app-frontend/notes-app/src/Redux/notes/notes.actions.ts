import { INote } from "@/types/notes/INote";
import { TCurrentAction } from "@/types/notes/TCurrentAction";

export enum ActionTypes {
    SET_NOTES = 'SET_NOTES',
    SET_SELECTED_ID = 'SET_SELECTED_ID',
    SET_CURRENT_ACTION = 'SET_CURRENT_ACTION',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING',
    CLEAR = 'CLEAR',
}

export type TNotesActions =
    { type: ActionTypes.SET_NOTES; notes: INote[]} |
    { type: ActionTypes.SET_SELECTED_ID; id: string } |
    { type: ActionTypes.SET_CURRENT_ACTION; currentAction: string} |
    { type: ActionTypes.SET_ERROR; errorMsg: string } |
    { type: ActionTypes.SET_IS_LOADING; isLoading: boolean } |
    { type: ActionTypes.CLEAR };

// action creators
export const setNotes = (notes: INote[]) => ({
    type: ActionTypes.SET_NOTES,
    notes: notes,
});

export const setSelectedId = (id: string) => ({
    type: ActionTypes.SET_SELECTED_ID,
    id: id,
});

export const setCurrentAction = (action: TCurrentAction) => ({
    type: ActionTypes.SET_CURRENT_ACTION,
    currentAction: action,
});

export const setError = (errorMsg: string) => ({
    type: ActionTypes.SET_ERROR,
    errorMsg: errorMsg,
});

export const setIsLoading = (isLoading: boolean) => ({
    type: ActionTypes.SET_ERROR,
    isLoading: isLoading
});

export const clearNotes = () => ({
    type: ActionTypes.CLEAR
});