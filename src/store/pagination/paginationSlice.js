import { createSlice } from "@reduxjs/toolkit";


const paginationSlice = createSlice({
    name: 'pagination',
    initialState:{
        pageNumber: 0,
        sizePerson: 10,
        paginatedData: 0,
        pageCount : 0
    },
    reducers:{
        nexPage: (state)=>{
            state.pageNumber ++
        },
        prevPage: (state)=>{
            state.pageNumber --
        }, 
        setPageCount: (state, {payload})=>{
            state.pageCount =  Math.ceil(payload.length/state.sizePerson)

        },
        setPaginatedData: (state, {payload})=>{
           let  start = state.pageNumber/state.sizePerson
           let end =  start + state.sizePerson
           state.paginatedData = payload.slice(start/end)

        }
         

        

    }


})
export const {setPageCount} = paginationSlice.actions
export default paginationSlice.reducer