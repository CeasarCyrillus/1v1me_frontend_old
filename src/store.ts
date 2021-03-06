import {combineReducers, createStore, Store } from "redux";
import {matchReducer} from "./pages/CreateMatchPage";


export const reducers = {
	matchState: matchReducer
};

export const rootReducer = combineReducers(reducers)
export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>;
export const createStoreWithState = (initialState: RootState): Store => createStore(rootReducer, initialState)