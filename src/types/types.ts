export interface RestaurantsApi {
    restaurants: Restaurant[];
}

export interface Restaurant {
    blurhash: string;
    launch_date: string;
    location: [number, number];
    name: string;
    online: boolean;
    popularity: number;
}

export interface PreparedRestaurant extends Restaurant {
    distance: number;
    timeOpen: number;
}

export interface ResponseData {
    sections: ResponseSection[];
}

export interface ResponseSection {
    title: string;
    restaurants: Restaurant[];
}

export interface DiscoveryRequestParams {
    lat: number;
    lon: number;
}
