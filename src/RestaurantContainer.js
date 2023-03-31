import { useState } from "react";
import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";

function RestaurantContainer() {
    const [restaurants, setRestaurants] = useState([]);
    const resList = useSelector((store) => store.restaurantList);
    const offset = 15;
    

    const index = resList?.data?.cards
        ?.map((item) => item?.cardType)
        ?.indexOf("seeAllRestaurants");

    async function fetchMoreData() {
        const data = await fetch();
    }


    return !resList.data ? (
        <div>Loading</div>
    ) : (
        // <InfiniteScroll
        //     dataLength={resList?.data?.cards[index]?.data?.data?.totalOpenRestaurants}
        //     next={fetchMoreData}
        //     hasMore={true}
        //     loader={<h4>Loading...</h4>}
        // >
        <div className=" py-4 flex flex-wrap gap-8">
            {resList?.data?.cards[index]?.data?.data?.cards?.map((item) => {
                return <RestaurantCard key={item.data.id} {...item.data} />;
            })}
        </div>
        // </InfiniteScroll>
    );
}

export default RestaurantContainer;
