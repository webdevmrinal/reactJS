import { CAROUSEL_CARD_IMAGE } from "./utils/constants";

function CarouselElement({ data }) {
    return (
        <img
            className="h-64 w-64 cursor-pointer"
            src={CAROUSEL_CARD_IMAGE + data.creativeId}
            alt="carousal-card"
        />
    );
}

export default CarouselElement;
