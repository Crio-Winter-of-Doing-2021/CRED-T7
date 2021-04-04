import { combineReducers } from 'redux';
import cards from './cards';
import auth from './auth';
import card from './card';
import errors from './errors';
import messages from './messages';
export default combineReducers({
    cards,
    auth,
    card,
    errors,
    messages,
});