import { ACTIVE_TYPE } from '../consts';
import { UserSingleTypes } from '../../../types';
import { UsersSingleActions } from '../types';

const userSingleReducer = (
    userSingle: UserSingleTypes = { data: null, isLoading: true },
    action: UsersSingleActions,
) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_USER:
            return { ...userSingle, data: action.data, isLoading: false };
        case ACTIVE_TYPE.CLEAR_USER:
            return { ...userSingle, data: null, isLoading: true };
        default:
            return userSingle;
    }
};

export default userSingleReducer;
