import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import { walletReducer } from "./reducers/wallet";

export const store = createStore(walletReducer, applyMiddleware(ReduxThunk));