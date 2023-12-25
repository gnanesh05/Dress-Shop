import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'

//middleware
const middleware = [logger];
const composedEnhancer = compose(applyMiddleware(...middleware));
//root-reducer
export const store = createStore(rootReducer, undefined , composedEnhancer);
