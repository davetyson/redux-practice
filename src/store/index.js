import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: `counter`,
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state,action) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        }
    }
});

const logInSlice = createSlice({
    name: `loggedIn`,
    initialState: { loggedIn: false },
    reducers: {
        changeLogInStatus(state) {
            if (state.loggedIn) {
                state.loggedIn = false;
            } else {
                state.loggedIn = true;
            }
        }
    }
});

export const actions = counterSlice.actions;

export const logInActions = logInSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        loggedIn: logInSlice.reducer
    }
})

export default store;