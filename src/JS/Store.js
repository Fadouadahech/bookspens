//src/JS/store.js
import { createStore } from 'redux'
import rootReducer from './rootReduce';
const store = createStore(rootReducer)
export default store;