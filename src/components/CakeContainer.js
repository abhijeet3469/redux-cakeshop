import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'



const CakeContainer = (props) => {
  return (
    <div>
        <h1>Number of available 🎂 - {props.numOfCakes}</h1>
        <button onClick={props.buyCake}>Buy 🎂</button>
    </div>
  )
}


const mapStateToProps = state => {
  return{
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyCake: ()=>dispatch(buyCake())
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (CakeContainer)