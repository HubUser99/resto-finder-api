import { PreparedRestaurant, ResponseSection } from "types/types";
import { filterEmptySections, filterRestaurantsByDistance } from "../filter";

describe("filterRestaurantsByDistance", () => {
    it("returns restaurants with distance field less that provided", () => {
        const restaurants: PreparedRestaurant[] = [
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

        const actual = filterRestaurantsByDistance(restaurants, 1500);
        const expected = [
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

        expect(actual).toStrictEqual(expected);
    });
});

describe("filterEmptySections", () => {
    it("removes empty sections", () => {
        const sections: ResponseSection[] = [
            {
                title: "Popular Restaurants",
                restaurants: [
                    {
                        blurhash: "UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX",
                        launch_date: "2020-04-20",
                        location: [24.938082, 60.17626],
                        name: "Sea Chain",
                        online: true,
                        popularity: 0.956990414084132,
                    },
                ],
            },
            {
                title: "New Restaurants",
                restaurants: [],
            },
            {
                title: "Nearby Restaurants",
                restaurants: [
                    {
                        blurhash: "UCO;.s:bO%r_yWXlORbbC?TFvobaVDi_t9nS",
                        launch_date: "2020-02-19",
                        location: [24.935637, 60.156621],
                        name: "Tender Lettuce",
                        online: true,
                        popularity: 0.3919633748546864,
                    },
                ],
            },
        ];

        const actual = filterEmptySections(sections);
        const expected = [
            {
                title: "Popular Restaurants",
                restaurants: [
                    {
                        blurhash: "UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX",
                        launch_date: "2020-04-20",
                        location: [24.938082, 60.17626],
                        name: "Sea Chain",
                        online: true,
                        popularity: 0.956990414084132,
                    },
                ],
            },
            {
                title: "Nearby Restaurants",
                restaurants: [
                    {
                        blurhash: "UCO;.s:bO%r_yWXlORbbC?TFvobaVDi_t9nS",
                        launch_date: "2020-02-19",
                        location: [24.935637, 60.156621],
                        name: "Tender Lettuce",
                        online: true,
                        popularity: 0.3919633748546864,
                    },
                ],
            },
        ];

        expect(actual).toStrictEqual(expected);
    });
});
