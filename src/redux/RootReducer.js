import {combineReducers} from 'redux'
import CakeReducer from './cake/CakeReducer'
import IceCreamReducer  from './icecream/IceCreamReducer'

const RootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})

export default RootReducer