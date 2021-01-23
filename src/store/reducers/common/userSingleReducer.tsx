import { ACTIVE_TYPE } from '../consts';
import { UserSingleTypes } from '../../../types';
import { UsersSingleActions } from '../types';

const userSingleReducer = (userSingle: UserSingleTypes = { data: [], loading: false }, action: UsersSingleActions) => {
    if (action.type === ACTIVE_TYPE.ADD_USER) {
        return { ...userSingle, data: { ...action.data }, loading: true };
    }
    return userSingle;
};

export const setUser = (data: UserSingleTypes) => ({ type: ACTIVE_TYPE.ADD_USER, data });

export default userSingleReducer;
