import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions';
import { rocketReducer } from './Rocket/RocketReducer';

const MyMiddlewares = [thunk, logger];
const rootReducer = combineReducers({
  missions: missionsReducer,
  rocket: rocketReducer,
});

const store = configureStore({
  missions: missionsReducer,
  reducer: rootReducer,
}, applyMiddleware(...MyMiddlewares));

export default store;
