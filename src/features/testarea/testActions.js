import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants"


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

//actions la tap hop cac functions
//muon send data toi state thi nhu the nao ha