import { PreparedRestaurant, Restaurant } from "types/types";
import { vectorLength } from "./algorithms";
import { onlinePrioritySort } from "./sort";
import { timeDifferenceInMsToNow } from "./time";

export const getPopularRestaurants = (restaurants: PreparedRestaurant[]) => {
    const result: Restaurant[] = onlinePrioritySort(
        restaurants,
        (a, b) => b.popularity - a.popularity
    ).slice(0, 10);

    result.forEach((r) => {
        delete ((r as unknown) as any).timeOpen;
        delete ((r as unknown) as any).distance;
    });

    return result;
};

export const getNewRestaurants = (restaurants: PreparedRestaurant[]) => {
    const result: Restaurant[] = onlinePrioritySort(
        restaurants.filter((r) => r.timeOpen <= 2629800000),
        (a, b) => a.timeOpen - b.timeOpen
    ).slice(0, 10);

    result.forEach((r) => {
        delete ((r as unknown) as any).timeOpen;
        delete ((r as unknown) as any).distance;
    });

    return result;
};

export const getNearbyRestaurants = (restaurants: PreparedRestaurant[]) => {
    const result: Restaurant[] = onlinePrioritySort(
        restaurants,
        (a, b) => a.distance - b.distance
    )
        .slice(0, 10)
        .map((r) => ({
            ...r,
            distance: undefined,
            timeOpen: undefined,
        }));

    result.forEach((r) => {
        delete ((r as unknown) as any).timeOpen;
        delete ((r as unknown) as any).distance;
    });

    return result;
};

export const getPreparedRestaurants = (
    lat: number,
    lon: number,
    restaurants: Restaurant[]
): PreparedRestaurant[] => {
    return restaurants.map((r) => ({
        ...r,
        distance: vectorLength(r.location[0], r.location[1], lat, lon),
        timeOpen: timeDifferenceInMsToNow(r.launch_date),
    }));
};
