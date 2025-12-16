import {createSlice} from'@reduxjs/toolkit'

const userslice=createSlice({
    name:'job',
    initialState:{
        info: localStorage.getItem("token") || null
    },
    reducers:{
        login:(state,action)=>{
            state.info=action.payload
        },
        logout:(state,action)=>{
            state.info=null

        }

        
    }
})

export const {login,logout}=userslice.actions
export default userslice.reducer