/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
   const startingCities = new Set();

    // Iterate through paths to populate the set and find destination city
    for (const path of paths) {
        startingCities.add(path[0]);
    }

    // Iterate again to find the city without outgoing path
    for (const path of paths) {
        if (!startingCities.has(path[1])) {
            return path[1];
        }
    }

    // This line should not be reached due to the guarantee of exactly one destination city
    return null;
};