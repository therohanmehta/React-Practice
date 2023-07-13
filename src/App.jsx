import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { dec, inc,incByValue } from './reduxSlice'
//j?
function App() {
 const count=useSelector((state)=>state.counter.value)
const dispatch=useDispatch()
const sixtynine=69
  return (
    <>

     <h1>hello  {JSON.stringify(count)}</h1>

     <button onClick={()=>{dispatch(inc())}}>Inc</button>
     <button onClick={()=>{dispatch(dec())}}>Dec</button>
     <button onClick={()=>{dispatch(incByValue(sixtynine))}}>inc 69</button>


    </>
  )
}

export default App
