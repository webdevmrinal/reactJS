export const CAROUSEL_SHIMMER_IMAGE = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"

export const CAROUSEL_CARD_IMAGE = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/"

export const RESTAURANT_CARD_IMAGE = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

const PROXY_URL= "https://cors-anywhere.herokuapp.com/"
const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45133957193621&lng=78.39913438366459&page_type=DESKTOP_WEB_LISTING"

export const RESTAURANT_LIST_URL = PROXY_URL+SWIGGY_API
// export const RESTAURANT_LIST_URL = "/api?lat=17.45133957193621&lng=78.39913438366459&page_type=DESKTOP_WEB_LISTING";

// export const RESTAURANT_LIST_URL = "http://localhost:3001/api/restaurants?lat=23.6724138&lng=86.1527555&page_type=DESKTOP_WEB_LISTING"

export const FETCH_MORE_RESTAURANTS = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6724138&lng=86.1527555&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
// export const RESTAURANT_LIST_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45133957193621&lng=78.39913438366459&page_type=DESKTOP_WEB_LISTING"
// export const RESTAURANT_LIST_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6724138&lng=86.1527555&page_type=DESKTOP_WEB_LISTING" 17.45133957193621, 78.39913438366459

// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6724138&lng=86.1527555&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6724138&lng=86.1527555&page_type=DESKTOP_WEB_LISTING"