import {compose, createStore, applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import { rootReducer } from './rootReducer'

//middleware
const loggerMiddleWare = (store)=>(next)=>(action)=>{
    console.log('action - ',action)
    if(!action.type){
        return next(action);
    }

    console.log('type', action.type);
    console.log('Payload ', action.payload)
    console.log('Current Store - ', store.getState());

    next(action)
    // it is a synchronus function and only way to get to next state

    console.log('Next State ', store.getState());
}

const middleware = [loggerMiddleWare];

const composedEnhancer = compose(applyMiddleware(...middleware));
//root-reducer
export const store = createStore(rootReducer, undefined , composedEnhancer);
