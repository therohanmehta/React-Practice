import { useReducer } from 'react'
import './App.css'

function App() {
 const [rohan,dispatch]=useReducer(reducer,{value:2})

  return (
    <>
     <h1>hello </h1>
    </>
  )
}

export default App
