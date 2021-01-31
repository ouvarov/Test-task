import { UsersListActions } from '../types';
import { ACTIVE_TYPE } from '../consts';
import { UsersListTypes } from '../../../types';

const usersListReducer = (usersList: UsersListTypes = { data: [], isLoading: true }, action: UsersListActions) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_USERS:
            return { ...usersList, data: [...action.data], isLoading: false };
        default:
            return usersList;
    }
};

export default usersListReducer;
