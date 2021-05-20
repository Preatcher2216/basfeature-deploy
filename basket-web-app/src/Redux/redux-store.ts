import {applyMiddleware, combineReducers, createStore} from "redux";
import gameHistoryReducer from "./Redusers/Game-Window/game-history-reducer";
import playerChangeReducer from "./Redusers/Game-Window/player-change-reducer";
import playersReducer from "./Redusers/Personal/players-reducer";
import passManagerReducer from "./Redusers/Game-Window/pass-manager-reducer";
import authorizationReducer from "./Redusers/Authorization/authorization-reducer";
import  thunkMiddleware from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'
import {persistStore} from "redux-persist"
import addTeamForm from "./Redusers/Game-Window/add-team-form-reducer";
import chooseTeamReducer from "./Redusers/Game-Window/choose-team-reducer";
import gameStatistic from "./Redusers/Game-Window/game-statistic";

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import aboutUs from "./Redusers/Game-Window/about-us-reducer";
import backendStatistics from "./Redusers/Game-Window/backend-statistic";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['addTeamForm', 'backendStatistics']
}


let rootReducer = combineReducers({
    gameHistory: gameHistoryReducer,
    playerChange: playerChangeReducer,
    players: playersReducer,
    passManager: passManagerReducer,
    auth: authorizationReducer,
    addTeamForm: addTeamForm,
    chooseTeamReducer: chooseTeamReducer,
    gameStatistic: gameStatistic,
    aboutUs: aboutUs,
    backendStatistics: backendStatistics
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
 const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

  const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store;

export {store, persistor};