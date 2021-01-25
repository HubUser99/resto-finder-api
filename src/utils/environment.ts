export const getDataUrl = () => {
    const url = process.env.DATA_URL;

    if (!url) {
        throw Error("DATA_URL env variable is not defined");
    }

    return url;
};

export const getPort = () => {
    const port = process.env.PORT ?? 3001;

    return port;
};

export const getCacheInterval = () => {
    const cacheInterval = process.env.CACHE_INTERVAL ?? "300";
    
    return parseInt(cacheInterval);
}
