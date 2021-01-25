import { PreparedRestaurant, Restaurant } from "types/types";
import {
    getNearbyRestaurants,
    getNewRestaurants,
    getPopularRestaurants,
    getPreparedRestaurants,
} from "../restaurants";

const restaurants: Restaurant[] = [
    {
        blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
        launch_date: "2020-02-23",
        location: [24.941244, 60.171987],
        name: "Ketchup XL",
        online: false,
        popularity: 0.30706741877410304,
    },
    {
        blurhash: "UCO;.s:bO%r_yWXlORbbC?TFvobaVDi_t9nS",
        launch_date: "2020-02-19",
        location: [24.935637, 60.156621],
        name: "Tender Lettuce",
        online: true,
        popularity: 0.3919633748546864,
    },
    {
        blurhash: "UH9DE2+hKKsCO-X5r]n*3#GAw3Sx+hr]OnX5",
        launch_date: "2020-05-22",
        location: [24.935326, 60.155631],
        name: "Mustard",
        online: true,
        popularity: 0.40907452479616846,
    },
];

const preparedRestaurants: PreparedRestaurant[] = [
    {
        blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
        launch_date: "2020-02-23",
        location: [24.941244, 60.171987],
        name: "Ketchup XL",
        online: false,
        popularity: 0.30706741877410304,
        distance: 1600,
        timeOpen: 0,
    },
    {
        blurhash: "UCO;.s:bO%r_yWXlORbbC?TFvobaVDi_t9nS",
        launch_date: "2020-02-19",
        location: [24.935637, 60.156621],
        name: "Tender Lettuce",
        online: true,
        popularity: 0.3919633748546864,
        distance: 1500,
        timeOpen: 0,
    },
    {
        blurhash: "UH9DE2+hKKsCO-X5r]n*3#GAw3Sx+hr]OnX5",
        launch_date: "2020-05-22",
        location: [24.935326, 60.155631],
        name: "Mustard",
        online: true,
        popularity: 0.40907452479616846,
        distance: 1300,
        timeOpen: 0,
    },
];

describe("getPopularRestaurants", () => {
    it("returns popular restaurants section", () => {
        const actual = getPopularRestaurants(preparedRestaurants);
        const expected = [
            {
                blurhash: "UH9DE2+hKKsCO-X5r]n*3#GAw3Sx+hr]OnX5",
                launch_date: "2020-05-22",
                location: [24.935326, 60.155631],
                name: "Mustard",
                online: true,
                popularity: 0.40907452479616846,
            },
            {
                blurhash: "UCO;.s:bO%r_yWXlORbbC?TFvobaVDi_t9nS",
                launch_date: "2020-02-19",
                location: [24.935637, 60.156621],
                name: "Tender Lettuce",
                online: true,
                popularity: 0.3919633748546864,
            },
            {
                blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
                launch_date: "2020-02-23",
                location: [24.941244, 60.171987],
                name: "Ketchup XL",
                online: false,
                popularity: 0.30706741877410304,
            },
        ];

        expect(actual).toStrictEqual(expected);
    });
});

describe("getNewRestaurants", () => {
    it("returns new restaurants section", () => {
        const actual = getNewRestaurants(preparedRestaurants);
        const expected: Restaurant[] = [];

        expect(actual).toStrictEqual(expected);
    });
});

describe("getNearbyRestaurants", () => {
    it("returns nearby restaurants section", () => {
        const actual = getNearbyRestaurants(preparedRestaurants);
        const expected: Restaurant[] = [
            {
                blurhash: "UCO;.s:bO%r_yWXlORbbC?TFvobaVDi_t9nS",
                launch_date: "2020-02-19",
                location: [24.935637, 60.156621],
                name: "Tender Lettuce",
                online: true,
                popularity: 0.3919633748546864,
            },
            {
                blurhash: "UH9DE2+hKKsCO-X5r]n*3#GAw3Sx+hr]OnX5",
                launch_date: "2020-05-22",
                location: [24.935326, 60.155631],
                name: "Mustard",
                online: true,
                popularity: 0.40907452479616846,
            },
            {
                blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
                launch_date: "2020-02-23",
                location: [24.941244, 60.171987],
                name: "Ketchup XL",
                online: false,
                popularity: 0.30706741877410304,
            },
        ];

        expect(actual).toStrictEqual(expected);
    });
});

describe("getPreparedRestaurants", () => {
    const lat = 1;
    const lon = 2;

    it("returns prepared restaurants", () => {
        const actual = getPreparedRestaurants(lat, lon, restaurants);
        const expected: PreparedRestaurant[] = [
            {
                blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
                launch_date: "2020-02-23",
                location: [24.941244, 60.171987],
                name: "Ketchup XL",
                online: false,
                popularity: 0.30706741877410304,
                distance: 6462872.2982899435,
                timeOpen: actual[0].timeOpen,
            },
            {
                blurhash: "UCO;.s:bO%r_yWXlORbbC?TFvobaVDi_t9nS",
                launch_date: "2020-02-19",
                location: [24.935637, 60.156621],
                name: "Tender Lettuce",
                online: true,
                popularity: 0.3919633748546864,
                distance: 6461447.861676908,
                timeOpen: actual[1].timeOpen,
            },
            {
                blurhash: "UH9DE2+hKKsCO-X5r]n*3#GAw3Sx+hr]OnX5",
                launch_date: "2020-05-22",
                location: [24.935326, 60.155631],
                name: "Mustard",
                online: true,
                popularity: 0.40907452479616846,
                distance: 6461357.219805827,
                timeOpen: actual[2].timeOpen,
            },
        ];

        expect(actual).toStrictEqual(expected);
    });
});
