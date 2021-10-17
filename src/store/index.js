import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { recipeReducer } from './recipeReducer'
import { offCanvasReducer } from './offCanvasReducer'

const rootReducer = combineReducers({
  recipeReducer,
  offCanvasReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
