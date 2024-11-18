export enum CurrentAction {
    ADD = 'ADD',
    EDIT = 'EDIT',
    DELETE = 'DELETE',
    NONE = 'NONE'
}

export type TCurrentAction =
    CurrentAction.ADD |
    CurrentAction.EDIT |
    CurrentAction.DELETE |
    CurrentAction.NONE;