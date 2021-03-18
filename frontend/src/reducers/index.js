import { combineReducers } from 'redux';
import cards from './cards';
import auth from './auth';

export default combineReducers({
    cards,
    auth
});