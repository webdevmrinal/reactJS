import { RESTAURANT_CARD_IMAGE } from "./utils/constants";
import { AiFillStar } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";

function RestaurantCard({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
    aggregatedDiscountInfo,
}) {
    return (
        <div>
            <div className="h-96 w-72 p-3 hover:shadow-md hover:ring-1 hover:ring-gray-300">
                <img
                    className="w-full"
                    src={RESTAURANT_CARD_IMAGE + cloudinaryImageId}
                    alt=""
                />
                <div className="pt-3">{name}</div>
                <div className="text-xs font-extralight">
                    {cuisines.join(", ")}
                </div>
                <div className="py-4 flex justify-between text-xs">
                    <span
                        className="flex items-center text-white px-2 py-[.10rem] gap-1"
                        style={{
                            backgroundColor:
                                parseInt(avgRating) > 3
                                    ? "#48c479"
                                    : parseInt(avgRating) > 2
                                    ? "#db7c38"
                                    : "#e1b055",
                        }}
                    >
                        <AiFillStar />
                        <span>{avgRating}</span>
                    </span>
                    <span>{slaString}</span>
                    <span>{costForTwoString}</span>
                </div>
                <hr />
                <div className="flex items-center py-3 text-amber-900">
                    <span
                        className={
                            (aggregatedDiscountInfo?.descriptionList[0]
                                ?.meta === undefined
                                ? "hidden "
                                : "") + "inline-block pr-2"
                        }
                    >
                        <CiPercent />
                    </span>
                    <span className="text-[.75rem]">
                        {aggregatedDiscountInfo?.descriptionList[0]?.meta}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;
