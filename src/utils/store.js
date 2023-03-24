import { configureStore } from "@reduxjs/toolkit";
import restaurantListSlice from "./restaurantListSlice";

const store = configureStore({
    reducer:{
        restaurantList:restaurantListSlice,
    },
})

export default store;