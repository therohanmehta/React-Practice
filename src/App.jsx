import { useRecoilState } from "recoil";
import "./App.css";
import { myData, stateAtomSelector } from "./Atom/atom";

function App() {
  const [data, setData] = useRecoilState(myData);

  const [state, setState] = useRecoilState(stateAtomSelector);
  return (
    <>
      <h1>hello {JSON.stringify(data.name)} </h1>
      <h2> I am from {state}</h2>

      <button
        onClick={() => {
          setData({ ...data, name: "name Changed" });
        }}
      >
        Change Name
      </button>
      
    </>
  );
}

export default App;
