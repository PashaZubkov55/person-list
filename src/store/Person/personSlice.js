import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getPersons = createAsyncThunk(
    'persons/getPersons',
    async (_, thanckApi) =>{
        try{
       const  response = await axios.get('https://jsonplaceholder.org/users/')
       //console.log(  response.data.data)
       return response.data
        } catch(error){
            console.log(error)
            return thanckApi.rejectWithValue(error)

        }
    }
)

 

const personSlice = createSlice({
    name: 'persons',
    initialState:{
        list:[],
        loading: false,
        modal:true

    },
    reducers:{
        detalModal:(state, {payload})=>{
            state.modal = payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getPersons.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(getPersons.fulfilled, (state, {payload})=>{
            state.loading = true
            state.list = payload
        })
        builder.addCase(getPersons.rejected, (state)=>{
            state.loading = false
        })
    }
})

    
    

export const {detalModal}  = personSlice.actions
 export default personSlice.reducer