import React from "react";
import {ImEqualizer2} from "react-icons/im";
import { useSelector } from "react-redux";

function FilterBar() {
    const resList = useSelector((store) => store.restaurantList);

    const index = resList?.data?.cards
        ?.map((item) => item?.cardType)
        ?.indexOf("seeAllRestaurants");

    

    return (
        <div className="flex justify-between pt-7 mx-4 border-b border-gray-300">
            <span className="text-2xl font-medium">{String(resList?.data?.cards[index]?.data?.data?.totalOpenRestaurants)+" restaurants"}</span>
            <span className="font-light text-sm flex pb-2">
                <button className="font-medium underline underline-offset-[19px] mr-5">Relevence</button>
                <button className="mr-5">Delivery Time</button>
                <button className="mr-5">Rating</button>
                <button className="mr-5">Cost: Low To High</button>
                <button className="mr-5">Cost: High To Low</button>
                <button className="flex items-center gap-1">
                    <span className="font-semibold">Filters</span>
                    <div className="border text-orange-600 inline-block border-orange-600 rounded-full p-2" >
                        <ImEqualizer2 />
                    </div>
                </button>
            </span>
        </div>
    );
}

export default FilterBar;
