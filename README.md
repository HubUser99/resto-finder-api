# resto-finder-api

This project was created to provide user with possibility of searching for restaurants by coordinates.\

The API returns JSON object containing 3 sections: `Popular Restaurants`, `New Restaurants` and `Nearby Restaurants`.

## Result rules

- Only items that are located closed than 1.5 km to the provided coordinates are returned as the result.
- All items in the sections are sorted with priority of displaying entries with the `online` field being equal to `true`.
- There is a maximum of 10 entries for each section.
- Sections with no entries are removed.

### Popular Restaurants

Contains array of restaurants sorted by `popularity` field in descending order.

### New Restaurants

Contains entries sorted by `launch_date` in descending order and requires `launch_date` field to contain date string pointing to a date that is no older than 4 months old.

### Nearby Restaurants

Contains restaurants sorted by the distance to the provided coordinates in ascending order.

## Project structure

Url to the external API and caching interval value are is located in [.env](.env) file.

Most of the source files are located in the [src](./src) directory.

- [src/comm](./src/comm) contains code for fetching restaurants data from the [Wolt official GitHub](https://raw.githubusercontent.com/woltapp/summer2021-internship/main/restaurants.json).
- [src/middleware](./src/middleware) contains cache middleware code that enables reduced load on external APIs.
- [src/routes](./src/routes) contains logic describing endpoints of the API.
- [src/types](./src/types) contains custom TypeScript type definitions for the application data.
- [src/utils](./src/utils) contains helper functions that provide parsing, calculating, sorting and other functionalities.

## Scripts

### Installation

Execute `yarn` command to install required dependencies.

### Execution

Start the server by typing `yarn start` in the console.
