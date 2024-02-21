
import { configureStore, createSlice } from "@reduxjs/toolkit";



const initialState = {
    counter: 0,
    showCounter: true
};


const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        inc(state,action){
            state.counter++;
        },
        dec(state, action){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state, counter){
            state.showCounter = !state.showCounter
        }

    }
}
)

const store = configureStore({
    reducer : counterSlice.reducer
});
export const counterActions = counterSlice.actions;
export default store;






/*
const reducer = (state = initial, action) => {
    if(action.type === "inc") {
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type === "increaseBy"){
        return(
            {
                ...state,
                counter : state.counter + action.payload
            }
        )
    }
    if(action.type === "dec") {
        return {
            ...state,
            counter: state.counter - 1
        };
    }

    if(action.type === "toggle"){
        return {
            ...state,
            showCounter : !state.showCounter
        }
    }
    return state;
};

const store = createStore(reducer);
*/
//  export default store;
