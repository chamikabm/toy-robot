import {
    createSlice,
} from '@reduxjs/toolkit';
import {
    processCommandUtil,
} from '../../utils';
import {
    RootState,
} from '../../store';

export type SimulatorState = {
    hasRobotPlacedOnTheTable: boolean;
    error: null | string;
}

const initialState = {
    hasRobotPlacedOnTheTable : false,
    error: '',
};

export const simulatorSlice = createSlice({
    name: 'simulator',
    initialState,
    reducers: {
        processCommand: (state, action) => {
            const command = action.payload as string;
            const processedResult = processCommandUtil({
                commandExecuted: command,
                isPlaced: state.hasRobotPlacedOnTheTable,
            });
            if (processedResult.success) {
                state.error = '';
            } else {
                state.error = processedResult.error.message;
            }
        },
        restart: () => {
            return initialState;
        },
    },
});

// Action Creators
export const {
    restart,
    processCommand,
} = simulatorSlice.actions;

// Selectors
export const selectError = (state: RootState) => state.simulator.error;

// Reducer
export default simulatorSlice.reducer;
