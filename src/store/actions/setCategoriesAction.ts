import { ACTIVE_TYPE } from '../reducers/consts';

export const setCategoriesActions = (categories: []) => ({ type: ACTIVE_TYPE.SET_CATEGORIES, categories });
