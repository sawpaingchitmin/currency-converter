const currencies = ["USD", "MMK", "THB", "JPY", "KRW", "SGD"];

export function fillCurrencyDropdowns(baseSelect, targetSelect) {
    currencies.forEach((cur) => { 
        const opt1 = document.createElement("option");
        const opt2 = document.createElement("option");
        opt1.text = cur;
        opt1.value = cur;
        opt2.text = cur;
        opt2.value = cur;
        baseSelect.appendChild(opt1);
        targetSelect.appendChild(opt2);
        }
    );
}
  
export function getStoredPair() {
    const pair = localStorage.getItem("currencyPair");
    return pair ? JSON.parse(pair) : { base: "USD", target: "MMK" }; 
}

export function storePair(base, target) {
    localStorage.setItem("currencyPair", JSON.stringify({ base, target }));
}

export function renderResult(base, target, amount, converted) {
    return `${amount.toFixed(2)} ${base} = ${converted.toFixed(2)} ${target}`;
}