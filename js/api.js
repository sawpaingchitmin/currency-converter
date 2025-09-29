export async function fetchRates(base) {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${encodeURIComponent(base)}`)
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        if (data.result !== "success") {
            throw new Error("API returned error");
        }
        return data.rates;

    } catch (error) {
        console.log("Something went wrong in fetchRates: ", error.message)
        throw error;
    }
}