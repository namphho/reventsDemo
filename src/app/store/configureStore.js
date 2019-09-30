import { createStore, applyMiddleware } from "redux";
import {devToolsEnhancer, composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";


export const configureStore = () => {
  const middlewares = [thunk];
  const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, composeEnhancer);
  return store;
};
