import { combineReducers, createStore } from 'redux';
import { usersListReducer, userSingleReducer } from './reducers';

const reducers = combineReducers({
    usersList: usersListReducer,
    userSingle: userSingleReducer,
});

const store = createStore(reducers);

export default store;
