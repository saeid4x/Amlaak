import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger];
// we spread all methods of logger by ...middleware
const store=createStore(rootReducer,applyMiddleware(...middlewares));
 
/*
//we could have below code instead above:

const store=createStore(rootReducer,applyMiddleware(logger));
*/

export default store;