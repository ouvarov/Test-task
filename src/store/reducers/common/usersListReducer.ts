import { UsersListActions } from '../types';
import { ACTIVE_TYPE } from '../consts';
import { UsersListTypes, UsersTypes } from '../../../types';

const usersListReducer = (usersList: UsersListTypes = { data: [], isLoading: false }, action: UsersListActions) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_USERS:
            return { ...usersList, data: [...action.data], isLoading: true };
        default:
            return usersList;
    }
};

export const setUsersList = (data: UsersTypes) => ({ type: ACTIVE_TYPE.ADD_USERS, data });

export default usersListReducer;
