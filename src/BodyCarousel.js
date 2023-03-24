import CarouselShimmer from "./CarouselShimmer";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import CarouselElement from "./CarouselElement";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useState } from "react";

function BodyCarousel() {
    const [curr, setCurr] = useState(0);

    const carouselList = useSelector((store) => store.restaurantList);
    const index = carouselList?.data?.cards
        ?.map((item) => item?.data?.subtype)
        ?.indexOf("topCarousel");
    console.log(carouselList);

    const prev = () =>
        setCurr((curr) =>
            curr === 0
                ? carouselList?.data?.cards[index]?.data?.data?.cards.length - 1
                : curr - 1
        );
    const next = () =>
        setCurr((curr) =>
            curr ===
            carouselList?.data?.cards[index]?.data?.data?.cards.length - 1
                ? 0
                : curr + 1
        );

    return !carouselList.data ? (
        <div className="m-auto h-80 max-w-[1250px] min-w-[1250px]">
            <CarouselShimmer />
        </div>
    ) : carouselList?.data?.cards[index]?.data?.data?.cards.length < 4 ? (
        <></>
    ) : (
        <div className="relative m-auto h-80 max-w-[1250px] min-w-[1250px]">
            <div className="h-full pl-3 pt-8 w-[97%] m-auto overflow-x-hidden">
                <div className=" flex gap-14 transition-transform ease-out duration-500" style={{transform:`translateX(-${curr*25}%)`}}>
                    {carouselList?.data?.cards[index]?.data?.data?.cards?.map(
                        (item) => (
                            <CarouselElement key={item.data.bannerId} {...item} />
                        )
                    )}
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <button onClick={prev} className="bg-white rounded-full text-gray-800">
                    <div className="p-3 hover:-translate-x-1 transition-transform ease-in-out duration-500">
                        <HiArrowLeft size={15} />
                    </div>
                </button>
                <button onClick={next} className="bg-white rounded-full text-gray-800">
                    <div className="p-3 hover:translate-x-1 transition-transform ease-in-out duration-500">
                        <HiArrowRight size={15} />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default BodyCarousel;
