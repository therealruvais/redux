import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { accountReducer} from "./components/features/account/accountSlice";
import {customerReducer} from './components/features/customer/customerSlice'

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});


export const store = createStore(rootReducer,applyMiddleware(thunk));

