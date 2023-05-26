import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: `counter`,
    initialState: { counter: 0 },
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        addBy(state, action) {
            state.value += action.payload;
        }
    }
});

console.log(counterSlice);

const logInSlice = createSlice({
    name: `loggedIn`,
    initialState: { loggedIn: false },
    reducers: {
        changeLogInStatus(state, actions) {
            if (actions.payload === true) {
                state.loggedIn = false;
            } else {
                state.loggedIn = true;
            }
        }
    }
});

export const actions = counterSlice.actions;

export const logInActions = logInSlice.actions;

const reducer = combineReducers({
    counter: counterSlice.reducer,
    loggedIn: logInSlice.reducer,
});
console.log({reducer});

const store = configureStore({reducer});

export default store;