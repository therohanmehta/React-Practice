import { useReducer } from "react";
import "./App.css";
function reducer(state, action) {
  if (action.type === "inc") {
    return { value: state.value + 1 };
  } else if (action.type === "dec") {
    return { value: state.value - 1 };
  } else if (action.type === "incByValue") {
    return { value: state.value +action.payload };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { value: 2 });
  const myNum = 10;
  return (
    <>
      <h1>hello {state.value}</h1>

      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        Dec
      </button>
      <button
        onClick={() => {
          dispatch({ type: "incByValue",payload:myNum });
        }}
      >
        inc by value
      </button>
    </>
  );
}

export default App;
