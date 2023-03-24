import "./CarouselShimmer.css";
import { CAROUSEL_SHIMMER_IMAGE } from "./utils/constants";

function CarouselShimmer() {
    return (
        <div className="h-full text-white text-3xl flex flex-col justify-center items-center gap-4">
            <div className="loader flex items-center justify-center">
                <img
                    className=" w-14"
                    src={CAROUSEL_SHIMMER_IMAGE}
                    alt="shimmer"
                />
            </div>
            <span>Looking for great food near you ...</span>
        </div>
    );
}

export default CarouselShimmer;
