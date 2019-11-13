import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";

import thunk from "redux-thunk";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = [applyMiddleware(thunk)];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(...enhancer)
);

export default store;
