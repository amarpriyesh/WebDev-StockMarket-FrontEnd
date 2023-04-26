import { createSlice } from "@reduxjs/toolkit";
import {getPrivilege} from "../thunks/privilege-thunk";



const privilegeSlice = createSlice({
                                     name: 'privilege',
                                     initialState: {},
                                     reducers: {


                                 },

                                   extraReducers:{[getPrivilege.fulfilled]:(state,{payload}) =>{
                                       console.log("payload",payload)
                                       state.privilege=payload;}}

});

//export const {setPrivilege} = privilegeSlice.actions;
export default privilegeSlice.reducer;