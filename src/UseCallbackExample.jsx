// import React from 'react'

import { useCallback, useState } from "react"
import UseCallbackOtherFunc from "./useCallbackOtherFunc"

function UseCallbackExample() {
    const [num,setNum]=useState(105)
    const [count,setCount]=useState(0)
    const incValue=useCallback(()=>{
      console.log('inc value rendered')
    },[count])
   
  return (
    <div>
      <h3>  {num}</h3>
      <button onClick={()=>{setNum(num+1)}}>Increase above</button>

      <h3>{count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Increase above</button>
    <UseCallbackOtherFunc func={incValue}/>
    </div>
  )
}

export default UseCallbackExample



