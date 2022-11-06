import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'
import { useState } from 'react'


const NewIceCreamContainer = (props) => {
     const [number, setNumber] = useState(1)
  return (
    <div>
        <h1>Number of 🍦 - {props.numOfIceCreams}</h1>
        <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
        <button onClick={()=>props.buyIceCream(number)}>Buy {number} 🍦</button>
    </div>
  )
}


const mapStateToProps = state => {
  return{
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyIceCream: number=>dispatch(buyIceCream(number))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (NewIceCreamContainer)