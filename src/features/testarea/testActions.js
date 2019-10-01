import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants"
import { asyncActionStart, asyncActionFinish } from "../async/asyncActions"
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from "../async/asyncConstants"


export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}

//actions la tap hop cac hanh dong can thuc hien. Cau truc 1 action se bao gom
//1* type vs payload
//2* function
//muon send data toi state thi nhu the nao ha => truyen them payload voi type

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const incrementAsync = (name) => {
    return async dispatch => {
        dispatch({type: ASYNC_ACTION_START, payload:  name});
        await delay(1000);
        dispatch(incrementCounter());
        dispatch(asyncActionFinish());
    }
}

export const decrementAsync = (name) => {
    return async dispatch => {
        dispatch({type: ASYNC_ACTION_START, payload: name});
        await delay(1000);
        dispatch(decrementCounter());
        dispatch(asyncActionFinish());
    }
}