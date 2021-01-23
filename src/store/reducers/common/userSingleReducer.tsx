import { ACTIVE_TYPE } from '../consts';
import { UserSingleTypes, UserTypes } from '../../../types';
import { UsersSingleActions } from '../types';

const userSingleReducer = (
    userSingle: UserSingleTypes = { data: [], isLoading: false },
    action: UsersSingleActions,
) => {
    if (action.type === ACTIVE_TYPE.ADD_USER) {
        return { ...userSingle, data: [action.data], isLoading: true };
    }
    return userSingle;
};

export const setUser = (data: UserTypes) => ({ type: ACTIVE_TYPE.ADD_USER, data });

export default userSingleReducer;
