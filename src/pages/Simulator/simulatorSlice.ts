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

export const initialState: SimulatorState = {
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
                state.coordinate = processedResult.coordinate;
                state.facing = processedResult.facing;
                state.hasRobotPlacedOnTheTable = processedResult.placed;
                state.commandOutput = processedResult.processedCommandOutput;
                state.commandHistory.unshift(processedResult.processedCommand);
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
export const selectCoordinate = (state: RootState) => state.simulator.coordinate;
export const selectFacing = (state: RootState) => state.simulator.facing;
export const selectCommandOutput = (state: RootState) => state.simulator.commandOutput;

// Reducer
export default simulatorSlice.reducer;
