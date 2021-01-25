import { validateDiscoveryParams } from "../validator";

describe("validateDiscoveryParams", () => {
    it("return parameters", () => {
        const req: any = {
            query: {
                lat: "24.929344",
                lon: "24.929344",
            },
        };

        const actual = validateDiscoveryParams(req);
        const expected = {
            lat: 24.929344,
            lon: 24.929344,
        };

        expect(actual).toStrictEqual(expected);
    });

    it("return undefined", () => {
        const req: any = {
            query: {},
        };

        const actual = validateDiscoveryParams(req);
        const expected = undefined;

        expect(actual).toEqual(expected);
    });
});
