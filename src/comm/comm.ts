import fetch from "node-fetch";
import { getDataUrl } from "utils/environment";

export const getRestaurantsData = async () => {
    const url = getDataUrl();
    const response = await fetch(url);
    const data = await response.json();

    return data;
};
