import { actionType } from "../../types/types";

type initialStateType = {
    arr:any
}
const InitialState: initialStateType = {
    arr: [],
};

function reduxstate(state:initialStateType = InitialState, action: actionType): initialStateType {
    switch (action.type) {
        case "ACTION":
            return {
                ...state,
                arr: [...state.arr, action.payload],
            };
        default:
            return state; 
    }
}
export default reduxstate;
    