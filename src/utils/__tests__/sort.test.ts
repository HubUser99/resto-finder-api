import { PreparedRestaurant } from "types/types";
import { onlinePrioritySort } from "../sort";

const preparedRestaurants: PreparedRestaurant[] = [
    {
        blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
        launch_date: "2020-02-23",
        location: [24.941244, 60.171987],
        name: "Ketchup XL",
        online: false,
        popularity: 0.30706741877410304,
        distance: 1000,
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

describe("onlinePrioritySort", () => {
    it("sorts restaurants with online field grouping", () => {
        const actual = onlinePrioritySort(
            preparedRestaurants,
            (a, b) => a.distance - b.distance
        );
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
                blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
                launch_date: "2020-02-23",
                location: [24.941244, 60.171987],
                name: "Ketchup XL",
                online: false,
                popularity: 0.30706741877410304,
                distance: 1000,
                timeOpen: 0,
            },
        ];

        expect(actual).toStrictEqual(expected);
    });
});
