import { combineReducers } from "redux";
import {reducer as FormReducer} from "redux-form";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";
import {reducer as ToastReducer} from "react-redux-toastr";
import { firebaseReducer} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";


const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer,
    form: FormReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;