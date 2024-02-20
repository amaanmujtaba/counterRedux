
import { createStore } from "redux";


const initial = {
    counter: 0
};

const reducer = (state = initial, action) => {
    if(action.type === "inc") {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === "dec") {
        return {
            ...state,
            counter: state.counter - 1
        };
    }
    return state;
};

const store = createStore(reducer);

 export default store;
