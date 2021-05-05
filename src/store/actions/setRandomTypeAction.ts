import { ACTIVE_TYPE } from '../reducers/consts';

export const setRandomTypeActions = (typeJoke: string) => ({ type: ACTIVE_TYPE.SET_TYPE, typeJoke });
