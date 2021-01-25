import express from "express";
import { apiCache, cacheMiddleware } from "middleware/cacheMiddleware";
import { RestaurantsApi } from "types/types";
import { validateDiscoveryParams } from "utils/validator";
import { getDiscoveryResponseData } from "./discovery";

const router = express.Router();

router.route("/").get((req, res) => {
    res.send(
        "Hi! This is an api for fetching best restaurants at the provided location!"
    );
});

router
    .route("/discovery")
    .get(cacheMiddleware(apiCache, "restaurants"), (req, res) => {
        const validParameters = validateDiscoveryParams(req);

        if (!validParameters) {
            res.status(400).send();
            return;
        }

        const cachedBody = apiCache.get<RestaurantsApi>("restaurants");

        if (!cachedBody) {
            res.status(500).send();
            return;
        }

        const responseData = getDiscoveryResponseData(
            cachedBody,
            validParameters
        );

        console.log("Sending response...");

        res.send(responseData);
    });

export default router;
