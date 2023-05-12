import {
    createSlice,
} from '@reduxjs/toolkit';

const initialState = {

};

export const simulatorSlice = createSlice({
    name: 'simulator',
    initialState,
    reducers: {
        restart: () => {
            return initialState;
        },
    },
});

// Action Creators
export const {
    restart,
} = simulatorSlice.actions;

// Reducer
export default simulatorSlice.reducer;
