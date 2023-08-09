import { configureStore } from "@reduxjs/toolkit";
import PersonSlice from "./Person/personSlice";
import paginationSlice from "./pagination/paginationSlice";

export const store = configureStore({
    reducer:{
        persons: PersonSlice,
        pagination: paginationSlice

    }

})