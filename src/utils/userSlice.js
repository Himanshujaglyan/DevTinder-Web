import createSlice from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        appUser : (state,action)=>{
            return action.payload;
        },
        removeUser :(state,action)=>{
            return null;
        }
    }
})

export {appUser,removeUser} from userSlice.action;
export default userSlice.reducer;