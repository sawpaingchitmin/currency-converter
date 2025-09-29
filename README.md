# 💱 Currency Converter

A simple and responsive **Currency Converter** built using **HTML, CSS, and JavaScript (ES6 Modules)**.

Users can **select currencies, enter an amount, and convert instantly** using **live exchange rates from open.er-api.com**.
The app also **remembers your last used currency pair** using **localStorage**.

---

## ✨ Features

- 🔄 Convert between multiple international currencies
- 🔁 Swap base and target currency with one click
- 💾 Remembers last used currency pair via localStorage
- 🌐 Fetches real-time exchange rates from API
- 📱 Fully responsive & dark-themed UI

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (Flexbox + Media Queries)
- **JavaScript (ES6 Modules)**
    -  `fetch` API
    - `async / await`
    - `localStorage`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sawpaingchitmin/currency-converter.git
```

### 2. Navigate into the project folder
```bash
cd currency-converter
```

### 3. Open in browser
```bash
Simply open index.html in your browser.
```

## 📂 Project Structure
```bash
├── js/
├── ├── api.js       # Handles API requests (fetchRates)
├── ├── converter.js # Conversion logic with caching
├── ├── main.js      # Entry point (event listeners + flow control)
├── └── ui.js        # DOM rendering & dropdown handling
├── index.html       # Main UI
└── style.css        # App styling (dark theme + responsive)
```

## 🌍 Live Demo
[Try it here](https://currency-converter-5wam.onrender.com/) 

