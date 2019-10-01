import { createReducer } from "../../app/common/utils/reducerUtils"
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from "./asyncConstants"

const initialState= {
    loading: false,
    elementName: null
}

const asyncActionsStarted = (state, payload) => {
    return {
        ...state,
        loading: true,
        elementName: payload
    }
}

const asyncActionsFinish = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

const asyncActionsError = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionsStarted,
    [ASYNC_ACTION_FINISH]: asyncActionsFinish,
    [ASYNC_ACTION_ERROR]: asyncActionsError,
})