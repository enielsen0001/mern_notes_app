import { INote } from "./INote";

export interface INotesState {
    allNotes: INote[];
    selectedNoteId: string | null,
    noteAction: string | null,
    error: string | null,
    isLoading: boolean;
}