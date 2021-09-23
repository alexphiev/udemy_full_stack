import {FETCH_USER} from "../actions/types";

export default function (state = {}, action) {
    // Event listener that acts on the state based on action events
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}