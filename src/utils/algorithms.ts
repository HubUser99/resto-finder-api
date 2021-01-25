export const R = 6371e3; //Earth radius in meters

export const parseRadians = (value: number) => {
    return (value * Math.PI) / 180;
};

export const haversineDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
) => {
    const latRad1 = parseRadians(lat1);
    const latRad2 = parseRadians(lat2);
    const deltaLatRad = parseRadians(lat2 - lat1);
    const deltaLonRad = parseRadians(lon2 - lon1);

    const a =
        Math.sin(deltaLatRad / 2) * Math.sin(deltaLatRad / 2) +
        Math.cos(latRad1) *
            Math.cos(latRad2) *
            Math.sin(deltaLonRad / 2) *
            Math.sin(deltaLonRad / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;

    return Math.abs(d);
};

export const vectorLength = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
) => {
    const latRad1 = parseRadians(lat1);
    const latRad2 = parseRadians(lat2);
    const lonRad1 = parseRadians(lon1);
    const lonRad2 = parseRadians(lon2);

    const x1 = R * Math.cos(latRad1) * Math.cos(lonRad1);
    const y1 = R * Math.cos(latRad1) * Math.sin(lonRad1);
    const z1 = R * Math.sin(latRad1);

    const x2 = R * Math.cos(latRad2) * Math.cos(lonRad2);
    const y2 = R * Math.cos(latRad2) * Math.sin(lonRad2);
    const z2 = R * Math.sin(latRad2);

    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const deltaZ = z2 - z1;

    return Math.sqrt(deltaX ** 2 + deltaY ** 2 + deltaZ ** 2);
};
