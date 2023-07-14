
import {useContext} from 'react'
import {DataContext } from './App'

function Comp3() {
    const {data,handleData}=useContext(DataContext)
  return (
    <div>
     <h1>{data}</h1>
     <button onClick={handleData}>Data change</button>
     
    </div>
  )
}

export default Comp3
