import { createSlice } from "@reduxjs/toolkit";

const restaurantListSlice = createSlice({
    name: "restaurantList",
    initialState: {},
    reducers:{
        updateRestaurantList:(state, action)=>{
            state["data"] = action.payload
        }
    }
});


export default restaurantListSlice.reducer
export const{updateRestaurantList} = restaurantListSlice.actions
