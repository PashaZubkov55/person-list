import { configureStore } from "@reduxjs/toolkit";
import PersonSlice from "./Person/personSlice";

export const store = configureStore({
    reducer:{
        person: PersonSlice

    }

})