import { atom ,selector} from "recoil"
// create atom in recoil?
export const myData=atom({
    key:'myData',
    default:{name:'Rohan',state:'Jharkhand',phone:666666666}
})


export const stateAtomSelector=selector({
    key:'stateFromMyData',
    get:({get})=>{
        const stateData=get(myData)
        return stateData.state
    }
})