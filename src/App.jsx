// // import React from 'react'
// import { createContext } from 'react'
// // import CompB from './CompB'
// import Child from './Child'
// const Name=createContext()
// const Address=createContext()

// function App() {
//   return (
//   <Name.Provider value={'rohan'}>
//     <Address.Provider value={'dhanbad'}>

//     <Child/>
//     </Address.Provider>
//    </Name.Provider>
//   )
// }

// export default App
// export {Name,Address}

import { createContext, useState } from "react";

import Child from "./Child";
const NameContext = createContext();
const AddressContext = createContext();

function App() {
  const [fname, setFname] = useState('rohan');
  const [address, setAddress] = useState('dhanbad');

  const updateFname = (newFname) => {
    setFname(newFname);
  };

  const updateAddress = (newAddress) => {
    setAddress(newAddress);
  };
  return (
    <NameContext.Provider value={{fname,updateFname}}>
      <AddressContext.Provider value={{address,updateAddress}}>
        <Child />
      </AddressContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
export { NameContext, AddressContext };
