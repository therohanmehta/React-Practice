import { useMemo } from "react";
import "./App.css";
import { useState } from "react";

function UseMemoExample() {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);

  function incNumber() {
    return setNum(num + 1);
  }

  function checkNum(num) {
    for (let i = 0; i < 1000000000; i++) {}

    return num;
  }

  // const number=checkNum(num)
  const numberInMemo = useMemo(() => {
    return checkNum(num);
  }, [num]);
  return (
    <>

      <h4>{numberInMemo}</h4>
      <button onClick={incNumber}>Increase Number</button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "text 1" : "text 2"}
      </button>
    </>
  );
}

export default UseMemoExample;
