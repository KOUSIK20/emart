import {  createStore} from '@reduxjs/toolkit'
import rootReducers from "./Reducers";

export const store = createStore(rootReducers);

