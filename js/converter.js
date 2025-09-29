import { fetchRates } from "./api.js";

export function createConverter() {
    let cachedBase = null;
    let cachedRates = null;

    return async function convert(base, target, amount) {
        if (!amount || amount <= 0) {
            throw new error("Amount must be greater than 0");
        }

        if (cachedBase != base) {
            cachedRates = await fetchRates(base);
            cachedBase = base;
        }

        if (!cachedRates[target]) {
            throw new error(`Rate not available for ${target}`);
        }

        return amount * cachedRates[target];
    };
}