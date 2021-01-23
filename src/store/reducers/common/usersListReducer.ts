import { UsersListActions } from '../types';
import { ACTIVE_TYPE } from '../consts';
import { UsersListTypes } from '../../../types';

const usersListReducer = (usersList: UsersListTypes = { data: [], loading: false }, action: UsersListActions) => {
    if (action.type === ACTIVE_TYPE.ADD_USERS) {
        return { ...usersList, data: [...usersList.data, ...action.data], loading: true };
    }
    return usersList;
};

export const setUsersList = (data: UsersListTypes) => ({ type: ACTIVE_TYPE.ADD_USERS, data });

export default usersListReducer;
