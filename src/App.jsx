import { useReducer, useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { initialState: state.initialState + 1 };

    case "dec":
      return { initialState: state.initialState - 1 };

    case "incByValue":
      return { initialState: state.initialState + action.payload };

    default:
      return state.initialState;
  }
}

function App() {
  const [num, setNum] = useState();
  const [state, dispatch] = useReducer(reducer, { initialState: 0 });
  return (
    <div>
      <h1>{state.initialState}</h1>
      <input
        type="number"
        onChange={(e) => {
          setNum(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "incByValue", payload: num });
        }}
      >
        increase By Number
      </button>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        decrease
      </button>
    </div>
  );
}

export default App;
