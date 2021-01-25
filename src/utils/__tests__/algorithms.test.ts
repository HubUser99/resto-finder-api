import { parseRadians, vectorLength } from "../algorithms";

describe("parseRadians", () => {
    const positiveDegrees = 90;
    const negativeDegrees = -90;
    const zeroDegrees = 0;

    it("parses positive degrees to radians", () => {
        const actual = parseRadians(positiveDegrees);
        const expected = 1.5707963267948966192313216916398;

        expect(actual).toEqual(expected);
    });

    it("parses negative degrees to radians", () => {
        const actual = parseRadians(negativeDegrees);
        const expected = -1.5707963267948966192313216916398;

        expect(actual).toEqual(expected);
    });

    it("parses zero degrees to radians", () => {
        const actual = parseRadians(zeroDegrees);
        const expected = 0;

        expect(actual).toEqual(expected);
    });
});

describe("vectorLength", () => {
    it("returns distance between two points", () => {
        const lat1 = 1;
        const lon1 = 2;
        const lat2 = 3;
        const lon2 = 4;
        
        const actual = vectorLength(lat1, lon1, lat2, lon2);
        const expected = 314371.0488577614;

        expect(actual).toEqual(expected);
    });
});
