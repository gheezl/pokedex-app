import { createStore, applyMiddleware } from "redux"
import { persistStore } from "redux-persist"
import logger from "redux-logger"
import createSagaMiddleWare from "redux-saga"

import rootReducer from "./root-reducer.js"
import rootSaga from "./root-saga.js"

const sagaMiddleware = createSagaMiddleWare()

const middlewares = [sagaMiddleware, logger]

// if (process.env.NODE_ENV === "development") {
//     middlewares.push(logger);
// }

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store;