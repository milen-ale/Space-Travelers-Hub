import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import missionReducer from './mission/Mission';
import { rocketReducer } from './Rocket/RocketReducer';

const MyMiddlewares = [thunk, logger];
const rootReducer = combineReducers({
  rocket: rocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(...MyMiddlewares));

export default store;
