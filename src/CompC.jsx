// // import React from 'react'
// import {Name,Address} from './App'
// function CompC() {
//   return (
//     <>
//    <Name.Consumer>
//     {(myname)=>{
//       return (
// <Address.Consumer>
// {(myaddress)=>{return(
//   <>
//   <h1>my name is {myname}</h1>
//   <h1>my address is {myaddress}</h1>
//   </>

// )}}

// </Address.Consumer>

//       )
//     }}

//    </Name.Consumer>
//     </>
//   )
// }

// export default CompC




import { useContext } from 'react'
import {NameContext, AddressContext} from './App'
function CompC() {

  let {fname,updateFname}=useContext(NameContext)
  const {address,updateAddress}=useContext(AddressContext)
  
  function handleNameChange(){
updateFname('new name Rohan')
  }
  function handleAddressChange(){
    updateAddress('new Address Dhanbad')
  }

  return (
    <>
  My Name is {fname}  i am from {address}
  <button onClick={handleNameChange}>namechange</button>
  <button onClick={handleAddressChange}>address change</button>


    </>
  )
}

export default CompC
