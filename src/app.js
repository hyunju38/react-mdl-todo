import React from "react";
import ReactDOM from "react-dom";

import {createStore} from "redux";

import FlashMessage from "./flash-message";

// es6 test
let flash = new FlashMessage("Hello from ES2015, Babel and Gulp!");
flash.display();

// react test
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById("example")
);

// redux test
function counter(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter);
store.subscribe(()=>console.log(store.getState()));

store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});
