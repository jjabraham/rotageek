import { combineReducers } from 'redux';
import contactReducer from '../contact/reducer';

const reducers = combineReducers({
  contact: contactReducer
});

export default reducers;
