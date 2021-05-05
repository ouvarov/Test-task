import { ACTIVE_TYPE } from '../consts';
import { SingleJoke } from '../types';

const jokeSingle = (joke: [], action: SingleJoke) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_SINGLE_JOKE:
            return { joke };
        default:
            return { joke };
    }
};

export default jokeSingle;
