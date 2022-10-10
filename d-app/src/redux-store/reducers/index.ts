import { createStore, applyMiddleware, combineReducers, } from "redux";
import ReduxThunk from 'redux-thunk';
import { walletReducer } from "./wallet";
import { popUpReducer } from "./popups";

const rootReducer = combineReducers({
    wallet: walletReducer,
    popUp: popUpReducer
});
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk)
);
export type RootState = ReturnType<typeof rootReducer>;