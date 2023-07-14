import { createContext ,useState} from "react";
import Comp1 from "./Comp1";
const DataContext = createContext();

function App() {

  const [data,setData]=useState('old data')
  function handleData(){
    setData('new data')
   
  }
  return (
    <div>
      <h1>jai shree ram</h1>
      <DataContext.Provider value={{data ,handleData} }>
        <Comp1 />
      </DataContext.Provider>
    </div>
  );
}
export { DataContext };
export default App;
