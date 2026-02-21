import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { inc, dec, byValue } from "./redux/counterSlice";
import { fetchUser } from "./redux/userAsyncThunk";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const { users, loading, isError } = useSelector((state) => state.users);

  return (
    <>
      <h2>{value}</h2>
      {JSON.stringify(users)}--
      {JSON.stringify(isError)}--
      {JSON.stringify(loading)}
      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(dec())}>Decrement</button>
      <button onClick={() => dispatch(byValue(10))}>Increment by 10</button>
      <button
        onClick={() => {
          dispatch(fetchUser());
        }}
      >
        Fetch User
      </button>
    </>
  );
}

export default App;
