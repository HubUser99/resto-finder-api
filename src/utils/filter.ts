import { PreparedRestaurant, ResponseSection } from "types/types";

export const filterRestaurantsByDistance = (
    restaurants: PreparedRestaurant[],
    distance: number
) => {
    return restaurants.filter((r) => r.distance < distance);
};

export const filterEmptySections = (sections: ResponseSection[]) => {
    return sections.filter((section) => section.restaurants.length > 0);
};
