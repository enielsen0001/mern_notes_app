import { IUser } from "@/types/user/IUser";

export enum ActionTypes {
  SET_USER ='SET_USER',
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
  CLEAR = 'CLEAR'
}

  export type UserAction =
    | { type: ActionTypes.SET_USER; user: IUser }
    | { type: ActionTypes.SET_ERROR; errorMsg: string }
    | { type: ActionTypes.SET_IS_LOADING; isLoading: boolean }
    | { type: ActionTypes.CLEAR };


  // action creators
  export const setUser = (user: IUser): UserAction => {
    return {
      type: ActionTypes.SET_USER,
      user: user
    };
  }

  export const setError = (errorMsg: string): UserAction => {
    return {
      type: ActionTypes.SET_ERROR,
      errorMsg: errorMsg
    };
  }

  export const setIsLoading = (isLoading: boolean): UserAction => {
    return {
      type: ActionTypes.SET_IS_LOADING,
      isLoading: isLoading
    };
  }

  export const clearUser = (): UserAction => {
    return {
      type: ActionTypes.CLEAR
    };
  }