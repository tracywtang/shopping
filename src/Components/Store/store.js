import {createStore} from 'redux'
import rootReducer from '../Reducer/reducer'
let store=createStore(rootReducer)
export default store