import { Request } from "express";

export const validateDiscoveryParams = (req: Request) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

    if (!lat || !lon || typeof lat !== "string" || typeof lon !== "string") {
        return;
    }

    const parsedLat = parseFloat(lat);
    const parsedLon = parseFloat(lon);

    return { lat: parsedLat, lon: parsedLon };
};
