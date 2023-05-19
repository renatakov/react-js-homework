import {combineReducers} from 'redux';
import { notesReducer } from './reducers/notesReducer';
import { createStore } from 'redux';

let reducers = combineReducers({
notesPage: notesReducer
})

let store = createStore(reducers);

export default store;