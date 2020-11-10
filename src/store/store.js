import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import demoReducer from "../reducers/demo_reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export const configureStore = (preloadedState = {}) => (
  createStore(
    demoReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);