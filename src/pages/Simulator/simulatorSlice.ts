import {
    createSlice,
} from '@reduxjs/toolkit';
import {
    processCommandUtil,
} from '../../utils';
import {
    RootState,
} from '../../store';
import {
    Facing,
    Coordinate,
} from '../../types';

export type SimulatorState = {
    commandHistory: string[];
    commandOutput: string;
    hasRobotPlacedOnTheTable: boolean;
    coordinate: Coordinate;
    facing: Facing;
    error: null | string;
}

const initialState = {
    commandHistory: [],
    commandOutput: '',
    hasRobotPlacedOnTheTable : false,
    coordinate : null,
    facing: null,
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
                currCoordinate: state.coordinate,
                currFacing: state.facing,
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
