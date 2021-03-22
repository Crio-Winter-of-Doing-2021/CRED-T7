import { combineReducers } from 'redux';
import cards from './cards';
import auth from './auth';
import card from './card';

export default combineReducers({
    cards,
    auth,
    card
});