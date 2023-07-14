import { useReducer } from "react";
import "./App.css";
function reducer(state, action) {
  if (action.type === "inc") {
    // return { value: state.value + 1 };
    console.log(123)
  } 
  else if (action.type === "dec") {
    return { value: state.value - 1 };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { value: 2 });

  return (
    <>
      <h1>hello {state.value}</h1>
      <button onClick={()=>{dispatch(type=inc)}}>Inc</button>
      <button>Dec</button>
      <button>inc by value</button>

    </>
  );
}

export default App;
