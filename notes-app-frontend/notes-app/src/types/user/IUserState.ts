import { IUser } from "./IUser";

export interface IUserState {
    user: IUser | null;
    isLoading: boolean;
    error: string | null;
}