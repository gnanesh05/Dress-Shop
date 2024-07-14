import {compose, createStore, applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
 import {thunk} from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './rootReducer'
import { rootSaga } from './root-saga'

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

//storage is usually local storage
//blaklisting user will not store it in local storage as we pick auth details from 3rd party we don't want to cache it ourselves and may
// even cause consistency problems

const persistConfig = {
key:'root',
storage,
whitelist :['cart']
};

const sagaMiddleware = createSagaMiddleware();
//should use either saga or thunk

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [process.env.NODE_ENV === 'development' && loggerMiddleWare, 
// thunk
sagaMiddleware
].filter(Boolean);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleware));
//root-reducer
export const store = createStore(persistedReducer, undefined , composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);