
import { UserActionTypes, TUserStateActions } from '../actions/userActions';
import { IUserState } from '@/types/user/IUserState';

const initialState: IUserState = {
    user: null,
    error: null,
    isLoading: false
}

const userReducer = (state = initialState, action: TUserStateActions): IUserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return { ...state, user: action.user };
        case UserActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading };
        case UserActionTypes.SET_ERROR:
            return { ...state, error: action.errorMsg };
        case UserActionTypes.CLEAR:
            return { ...initialState };
        default:
            return state;
    }
}

export default userReducer;