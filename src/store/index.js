import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counterReducer',
    initialState,
    reducers: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        },
        increase: (state, action) => {
            state.counter += action.payload
        },
        toggleCounter: state => {
            state.showCounter = !state.showCounter
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const { increment, decrement, increase, toggleCounter } = counterSlice.actions;

export default store;