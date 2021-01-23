import { UsersListActions } from '../types';
import { ACTIVE_TYPE } from '../consts';
import { UsersListTypes, UsersTypes } from '../../../types';

const usersListReducer = (usersList: UsersListTypes = { data: [], isLoading: false }, action: UsersListActions) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_USERS:
            return { ...usersList, data: [...action.data], isLoading: true };
        case ACTIVE_TYPE.CLEAR_USERS:
            return { ...usersList, data: [], isLoading: false };
        default:
            return usersList;
    }
};

export const setUsersList = (data: UsersTypes) => ({ type: ACTIVE_TYPE.ADD_USERS, data });
export const clearUsersList = () => ({ type: ACTIVE_TYPE.CLEAR_USERS });

export default usersListReducer;
