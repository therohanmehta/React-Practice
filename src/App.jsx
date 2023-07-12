
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, incByValue, increment } from './reduxSlicer'

import { useState } from 'react'


function App() {
const count=useSelector((state)=>(state.counter.value))
const dispatch=useDispatch()
const [num,setNum]=useState()
  return (
    <>
  
     <h2>{count}</h2>
     <button onClick={()=>{dispatch(increment())}}>inc</button>
     <button >dec</button>
     <input type="text" onChange={(e)=>{setNum(+e.target.value)}}/>
     <button onClick={()=>{dispatch(incByValue(num))}}>incbyValue</button>

    </>
  )
}

export default App
