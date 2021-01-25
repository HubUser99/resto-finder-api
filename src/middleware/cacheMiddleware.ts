import { getRestaurantsData } from "comm/comm";
import { RequestHandler } from "express";
import NodeCache from "node-cache";
import { getCacheInterval } from "utils/environment";

export const cacheInterval = getCacheInterval();

export const apiCache = new NodeCache({
    stdTTL: cacheInterval,
    checkperiod: cacheInterval,
});

export const cacheMiddleware = (
    cacheInstance: NodeCache,
    itemKey: string
): RequestHandler => {
    return async (req, res, next) => {
        const cachedBody = cacheInstance.get(itemKey);

        if (cachedBody) {
            next();
        } else {
            await updateCache(cacheInstance, itemKey);
            console.log("Updated cache!");

            next();
        }
    };
};

export const updateCache = async (
    cacheInstance: NodeCache,
    itemKey: string
) => {
    console.log("Updating cache...");

    const data = await getRestaurantsData();
    return cacheInstance.set(itemKey, data);
};
