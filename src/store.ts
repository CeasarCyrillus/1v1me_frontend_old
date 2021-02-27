import {combineReducers, createStore } from "redux";


export const rootReducer = combineReducers({})
export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>;