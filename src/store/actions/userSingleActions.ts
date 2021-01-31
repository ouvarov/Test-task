import { UserTypes } from '../../types';
import { ACTIVE_TYPE } from '../reducers/consts';

export const setUser = (data: UserTypes) => ({ type: ACTIVE_TYPE.ADD_USER, data });
export const clearUser = () => ({ type: ACTIVE_TYPE.CLEAR_USER });
