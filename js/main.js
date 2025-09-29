import { createConverter } from './converter.js';
import { fillCurrencyDropdowns, getStoredPair, storePair, renderResult } from './ui.js';

const baseSelect = document.getElementById("baseSelect");
const targetSelect = document.getElementById("targetSelect");
const swapBtn = document.getElementById("swapBtn");
const amountInput = document.getElementById("amountInput");
const convertBtn = document.getElementById("convertBtn");
const resultText = document.getElementById("resultText");

fillCurrencyDropdowns(baseSelect, targetSelect);
const { base, target } = getStoredPair();
baseSelect.value = base;
targetSelect.value = target;

const converter = createConverter();

swapBtn.addEventListener("click", () => {
    [baseSelect.value, targetSelect.value] = [targetSelect.value, baseSelect.value];
    storePair(baseSelect.value, targetSelect.value);
});

convertBtn.addEventListener("click", async () => {
    const base = baseSelect.value;
    const target = targetSelect.value;
    const amount = parseFloat(amountInput.value);

    try {
        if (isNaN(amount) || amount <= 0) {
            throw new Error("Please enter a valid amount");
        }
        const converted = await converter(base, target, amount);
        resultText.textContent = renderResult(base, target, amount, converted);

        storePair(base, target);
    }
    catch (error) {
        resultText.textContent = `${error.message}`;
        console.log("Conversion Error", error)
    }
    
}
);