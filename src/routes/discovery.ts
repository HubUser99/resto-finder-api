import {
    DiscoveryRequestParams,
    ResponseData,
    RestaurantsApi,
} from "types/types";
import { filterRestaurantsByDistance, filterEmptySections } from "utils/filter";
import {
    getPreparedRestaurants,
    getPopularRestaurants,
    getNewRestaurants,
    getNearbyRestaurants,
} from "utils/restaurants";

export const getDiscoveryResponseData = (
    requestBody: RestaurantsApi,
    parameters: DiscoveryRequestParams
) => {
    const restaurants = requestBody.restaurants;

    const { lat, lon } = parameters;

    const preparedRestaurants = getPreparedRestaurants(lat, lon, restaurants);

    const filteredByDistanceRestaurants = filterRestaurantsByDistance(
        preparedRestaurants,
        1500
    );

    const popularRestaurants = getPopularRestaurants(
        filteredByDistanceRestaurants
    );

    const newRestaurants = getNewRestaurants(filteredByDistanceRestaurants);

    const nearbyRestaurants = getNearbyRestaurants(
        filteredByDistanceRestaurants
    );

    const responseData: ResponseData = {
        sections: filterEmptySections([
            {
                title: "Popular Restaurants",
                restaurants: popularRestaurants,
            },
            {
                title: "New Restaurants",
                restaurants: newRestaurants,
            },
            {
                title: "Nearby Restaurants",
                restaurants: nearbyRestaurants,
            },
        ]),
    };

    return responseData;
};
