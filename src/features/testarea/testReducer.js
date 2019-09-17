import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/utils/reducerUtils";

//data khởi tạo ban đầu
const initialState = {
  data: 42
};


//thay đổi initial-data & return data

const incrementCounter = (state) => {
    return {...state, data: state.data + 1 }
}
//return new state with data: state.data - 1
const decrementCounter = (state) => {
    return {...state, data: state.data - 1 }
}


export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter,
})

//cau hoi: xu ly nhu the nao neu state co nhieu data khac nhau
