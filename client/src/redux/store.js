//Estado global => cualquier componente puede hacer uso de este
//Es un OBJETO
//Redux: el objeto del estado global SOLO puede ser modificado por un REDUCER (funcion)
//Reducer: recibe las instrucciones de lo que tiene que hacer
//Action: es lo que le mando en forma de objeto al reducer diciendole lo que tiene que hacer
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
