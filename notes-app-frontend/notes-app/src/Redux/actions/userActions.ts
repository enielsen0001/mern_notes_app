import { IUser } from "@/types/user/IUser";

export enum UserActionTypes {
  SET_USER ='SET_USER',
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
  CLEAR = 'CLEAR',
  LOGIN = 'LOGIN',
  ADD_USER = 'ADD_USER',
  EDIT_USER = 'EDIT_USER',
  DELETE_USER = 'DELETE_USER'
}

  export type TUserStateActions =
    { type: UserActionTypes.SET_USER, user: IUser }
    | { type: UserActionTypes.SET_ERROR, errorMsg: string }
    | { type: UserActionTypes.SET_IS_LOADING, isLoading: boolean }
    | { type: UserActionTypes.CLEAR };

  export type TUserSagaActions =
    { type: UserActionTypes.LOGIN, email: string; password: string }
    | { type: UserActionTypes.ADD_USER, user: IUser }
    | { type: UserActionTypes.EDIT_USER, user: IUser }
    | { type: UserActionTypes.DELETE_USER, userId: string };


  // state action creators
  export const setUser = (user: IUser): TUserStateActions => {
    return {
      type: UserActionTypes.SET_USER,
      user: user
    };
  }

  export const setError = (errorMsg: string): TUserStateActions => {
    return {
      type: UserActionTypes.SET_ERROR,
      errorMsg: errorMsg
    };
  }

  export const setIsLoading = (isLoading: boolean): TUserStateActions => {
    return {
      type: UserActionTypes.SET_IS_LOADING,
      isLoading: isLoading
    };
  }

  export const clearUser = (): TUserStateActions => {
    return {
      type: UserActionTypes.CLEAR
    };
  }

  // saga action creators
  export const login = (email: string, password: string): TUserSagaActions => {
    return {
      type: UserActionTypes.LOGIN,
      email: email,
      password: password,
    }
  }

  export const addUser = (user: IUser): TUserSagaActions => {
    return {
      type: UserActionTypes.ADD_USER,
      user: user
    };
  }

  export const editUser = (user: IUser): TUserSagaActions => {
    return {
      type: UserActionTypes.EDIT_USER,
      user: user
    };
  }

  export const deleteUser = (userId: string): TUserSagaActions => {
    return {
      type: UserActionTypes.DELETE_USER,
      userId: userId
    };
  }