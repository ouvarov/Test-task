import { UsersTypes } from '../../types';
import { ACTIVE_TYPE } from '../reducers/consts';

export const setUsersList = (data: UsersTypes) => ({ type: ACTIVE_TYPE.ADD_USERS, data });
