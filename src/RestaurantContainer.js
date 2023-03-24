import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";

function RestaurantContainer() {
    const resList = useSelector((store) => store.restaurantList);

    const index = resList?.data?.cards
        ?.map((item) => item?.cardType)
        ?.indexOf("seeAllRestaurants");

    return !resList.data ? (
        <div>Loading</div>
    ) : (
        <div className="py-4 flex flex-wrap gap-8">
            {resList?.data?.cards[index]?.data?.data?.cards?.map((item) => {
                return <RestaurantCard key={item.data.id} {...item.data} />;
            })}
        </div>
    );
}

export default RestaurantContainer;
