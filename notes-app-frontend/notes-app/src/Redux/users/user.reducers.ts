
import { ActionTypes, UserAction } from './user.actions';
import { IUserState } from '@/types/user/IUserState';

const initialState: IUserState = {
    user: null,
    error: null,
    isLoading: false
}

const userReducer = (state = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return { ...state, user: action.user };
        case ActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading };
        case ActionTypes.SET_ERROR:
            return { ...state, error: action.errorMsg };
        case ActionTypes.CLEAR:
            return { ...initialState };
        default:
            return state;
    }
}

export default userReducer;