import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers =createAsyncThunk("/profiles/fetchUsers",
async()=>{
    const res =  await axios.get("https://coder-access.herokuapp.com/profiles")
    
    console.log('thunk',res.data);

    return  res.data
})

const profileSlice = createSlice({
    name:'profiles',
    initialState:{
        isLoading:false,
        profiles:[],
        error:null
    },
    extraReducers:(builder) =>{

        builder.addCase(fetchUsers.pending,(state)=>{
            state.isLoading= true
        });
        builder.addCase(fetchUsers.fulfilled,(state, action)=>{
            state.isLoading= false
            state.profiles=action.payload
            state.error=null
        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading= false
            state.profiles= []
            state.error=action.error.message
        })

    }
})

export default profileSlice.reducer