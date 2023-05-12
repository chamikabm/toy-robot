import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import simulatorSlice from '../pages/Simulator/simulatorSlice';


const rootReducer = combineReducers({
    simulator: simulatorSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(logger),
    });
};

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
