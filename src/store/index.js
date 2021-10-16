import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cashReducer } from './cashReduser'
import { titleReducer } from './titleReducer'

const rootReducer = combineReducers({
  cashReducer,
  titleReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
