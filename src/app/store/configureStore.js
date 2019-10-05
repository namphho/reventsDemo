import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebase from "../../app/config/firebase";

const rrfConfig = {
  userProfiles: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

export const configureStore = () => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const composeEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );
  const store = createStore(rootReducer, composeEnhancer);
  return store;
};
