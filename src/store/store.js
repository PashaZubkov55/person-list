import { configureStore } from "@reduxjs/toolkit";
import PersonSlice from "./Persone/personSlice";

export const store = configureStore({
    reducer:{
        person: PersonSlice

    }

})