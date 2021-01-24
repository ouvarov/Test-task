import { ACTIVE_TYPE } from '../consts';
import { UserSingleTypes, UserTypes } from '../../../types';
import { UsersSingleActions } from '../types';

const userSingleReducer = (userSingle: UserSingleTypes = { data: [], isLoading: true }, action: UsersSingleActions) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_USER:
            return { ...userSingle, data: [action.data], isLoading: false };
        case ACTIVE_TYPE.CLEAR_USER:
            return { ...userSingle, data: [], isLoading: true };
        default:
            return userSingle;
    }
};

export const setUser = (data: UserTypes) => ({ type: ACTIVE_TYPE.ADD_USER, data });
export const clearUser = () => ({ type: ACTIVE_TYPE.CLEAR_USER });

export default userSingleReducer;
