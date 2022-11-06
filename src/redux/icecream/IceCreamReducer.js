import { BUY_ICECREAM } from "./IceCreamType"

const initialState = {
    numOfIceCreams: 25
}

const IceCreamReducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams-action.payload
        }
        default: return state
    }
} 

export default IceCreamReducer