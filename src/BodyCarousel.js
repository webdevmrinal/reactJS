import CarouselShimmer from "./CarouselShimmer";
import { useSelector } from "react-redux";
import CarouselElement from "./CarouselElement";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useRef, useState } from "react";

// react-slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Arrow Left
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div
            style={{
                ...style,
                backgroundColor: "white",
                borderRadius: "9999px",
                color: "rgb(31 41 55)",
            }}
            onClick={onClick}
            className={className + "bg-white rounded-full text-gray-800"}
        >
            <div className="p-3 hover:-translate-x-1 transition-transform ease-in-out duration-500">
                <HiArrowLeft size={15} />
            </div>
        </div>
    );
};
// Arrow Right
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, color: "white" }}
            onClick={onClick}
        >
            <span>Prev</span>
        </div>
    );
};

function BodyCarousel() {
    const slider = useRef(null);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };

    const [curr, setCurr] = useState(0);

    const carouselList = useSelector((store) => store.restaurantList);
    const index = carouselList?.data?.cards
        ?.map((item) => item?.data?.subtype)
        ?.indexOf("topCarousel");

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
            {/* loading... */}
        </div>
    ) : carouselList?.data?.cards[index]?.data?.data?.cards.length < 4 ? (
        <></>
    ) : (
        <div className="relative m-auto h-80 max-w-[1200px] min-w-[1200px]">
            <div className=" absolute w-full h-fit top-8 left-7">
                <Slider style={{cursor:'pointer'}} ref={slider} {...settings}>
                    {carouselList?.data?.cards[index]?.data?.data?.cards?.map(
                        (item) => (
                            <div>
                                <CarouselElement
                                    key={item.data.bannerId}
                                    {...item}
                                />
                            </div>
                        )
                    )}
                </Slider>
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <button
                    onClick={() => slider?.current?.slickPrev()}
                    className="bg-white rounded-full text-gray-800"
                >
                    <div className="p-3 hover:-translate-x-1 transition-transform ease-in-out duration-500">
                        <HiArrowLeft size={15} />
                    </div>
                </button>
                <button
                    onClick={() => slider?.current?.slickNext()}
                    className="bg-white rounded-full text-gray-800"
                >
                    <div className="p-3 hover:translate-x-1 transition-transform ease-in-out duration-500">
                        <HiArrowRight size={15} />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default BodyCarousel;
