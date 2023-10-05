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
        modal:false,
        person: {},
        limitPage: 10,
        countNamberPage: 1,
        lastRow: 10,
        firstRow: 2,
        countPage: []


    },
    reducers:{
      getLimitPage:(state)=>{
        let  limitData = state.list.length / state.limitPage
       
            for (let i = 1; i <= limitData; i++) {
               if (state.countPage.length>=limitData) {
                return 
               }
               state.countPage.push(i)
                 
             }
      },
    

      paginationPages: (state,{payload})=>{
        console.log(payload)
        const array = localStorage.getItem('list')
        const list = JSON.parse(array)
        const  first = payload * state.limitPage 
        const last  =  first - state.limitPage
        const paginatorList  = list.slice(last,first)
        console.log(paginatorList)
        state.list = [...paginatorList]





      },
      changePersons:(state, {payload})=>{
        state.list = [...payload]
    },
    setLastRow: (state, {payload})=>{
        state.lastRow = payload
    },
    setfirstRow: (state, {payload})=>{
        state.firstRow = payload
    },
    setCountNamberPage: (state, {payload})=>{
        state.countNamberPage = payload
    },
    setlimitPage: (state, {payload})=>{
        state.limitPage = payload
    },



        detalModal:(state, {payload})=>{
            state.modal = payload
        },
        getPerson: (state, {payload})=>{
            state.person = payload
            state.modal= true
        },
       


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

    
    

export const {detalModal, getPerson, changePersons, getLimitPage, paginationPages, setCountNamberPage, setLastRow, setfirstRow , setlimitPage}  = personSlice.actions
 export default personSlice.reducer