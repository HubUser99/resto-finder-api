import { PreparedRestaurant } from "types/types";

export const onlinePrioritySort = (
    restaurants: PreparedRestaurant[],
    comparator: (a: PreparedRestaurant, b: PreparedRestaurant) => number
) => {
    const sortedData = [...restaurants].sort((a, b) => {
        if (a.online && !b.online) {
            return -1;
        } else if (!a.online && b.online) {
            return 1;
        } else {
            return comparator(a, b);
        }
    });

    return sortedData;
};
