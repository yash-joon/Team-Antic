"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vvvvvvvvvvvvvvvv CHANGE THESE VALUES vvvvvvvvvvvvvvvv
var numEntries = 200;
var variance = 8; // cost = cost * variance
var earliestDate = new Date(2024, 1, 25); // Year, Month(0-11), Day(1-31)
var latestDate = new Date(2025, 1, 25); // Year, Month(0-11), Day(1-31)
// ^^^^^^^^^^^^^^^^ CHANGE THESE VALUES ^^^^^^^^^^^^^^^^
// -----------Helper Functions----------
// Helper function to generate a random date
function getRandomDate(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return "".concat(date.getMonth() + 1, "/").concat(date.getDate(), "/").concat(date.getFullYear());
}
function getRandomCostOrAmount(min, max, variance) {
    // Ensure variance is within the valid range (1 to 10)
    variance = Math.max(1, Math.min(10, variance));
    // Map variance to a scaling factor (e.g., 0% to 50%)
    var maxScalingFactor = 0.5; // 50% for variance = 10
    var scalingFactor = (variance - 1) / 9 * maxScalingFactor; // Linearly map 1–10 to 0–0.5
    // Generate a random value within the range [min, max]
    var baseValue = Math.random() * (max - min) + min;
    // Adjust the value based on the scaling factor
    var adjustedValue = baseValue * (1 + (Math.random() * 2 - 1) * scalingFactor);
    // Round to 2 decimal places and return as a string
    return adjustedValue.toFixed(2);
}
// Helper function to generate a random latitude/longitude
function getRandomLatLong() {
    return {
        latitude: 39.781721 + (Math.random() - 0.5) * 0.1,
        longitude: -89.650148 + (Math.random() - 0.5) * 0.1,
    };
}
// -----------ScheduledOutData ---------
// List of possible services, categories, payment methods, and statuses
var scheduledOutPossible = {
    "services": [
        "Walmart",
        "Chipotle",
        "AMC Movie Theater",
        "McDonalds",
        "Costco Gas",
        "ShareTea",
        "Ice Skating",
        "Steam",
        "Subway",
        "Netflix",
        "Spotify",
        "Local Grocery Store",
        "Local Pizza Place"
    ],
    "categories": [
        "Groceries",
        "Dining",
        "Entertainment",
        "Transportation",
        "Subscriptions"
    ],
    "paymentMethods": [
        "Credit Card",
        "Debit Card",
        "PayPal"
    ],
    "statuses": [
        "Scheduled",
        "Pending",
        "Completed"
    ]
};
// Function to generate a single ScheduledOutData entry
function generateScheduledOutData(transactionId) {
    var service = scheduledOutPossible["services"][Math.floor(Math.random() * scheduledOutPossible["services"].length)];
    var category = scheduledOutPossible["categories"][Math.floor(Math.random() * scheduledOutPossible["categories"].length)];
    var paymentMethod = scheduledOutPossible["paymentMethods"][Math.floor(Math.random() * scheduledOutPossible["paymentMethods"].length)];
    var status = scheduledOutPossible["statuses"][Math.floor(Math.random() * scheduledOutPossible["statuses"].length)];
    var _a = getRandomLatLong(), latitude = _a.latitude, longitude = _a.longitude;
    return {
        transactionId: transactionId,
        date: getRandomDate(earliestDate, latestDate),
        service: service,
        category: category,
        cost: getRandomCostOrAmount(5, 1000 * Math.random() * 2, variance),
        paymentMethod: paymentMethod,
        location: {
            storeName: service,
            address: "".concat(Math.floor(Math.random() * 1000) + 1, " Main St, Springfield, IL"),
            latitude: latitude,
            longitude: longitude,
        },
        status: status,
        recurring: Math.random() < 0.2, // 20% chance of being recurring
        notes: "Transaction for ".concat(service),
        pointsEarned: 0,
    };
}
// --------------- Reserve Data ----------------------
var reservePossible = {
    "sources": [
        "Venmo from a friend",
        "Zelle from a friend",
        "Reimbursement",
        "Bonus",
        "Interest",
        "Rental Income",
        "Gift",
        "Dividends",
        "Tax Refund",
        "Freelance Work",
        "Salary",
    ],
    "categories": [
        "Income",
        "Refund",
        "Other",
        "Investment",
    ],
    "paymentMethods": [
        "Credit",
        "Debit",
        "Direct Deposit",
        "PayPal",
        "Cash",
        "Zelle",
        "Venmo",
    ],
    "statuses": [
        "Scheduled",
        "Pending",
        "Completed"
    ],
};
// Function to generate a single ReserveData entry
function generateReserveData(reserveId) {
    var source = reservePossible["sources"][Math.floor(Math.random() * reservePossible["sources"].length)];
    var category = reservePossible["categories"][Math.floor(Math.random() * reservePossible["categories"].length)];
    var paymentMethod = reservePossible["paymentMethods"][Math.floor(Math.random() * reservePossible["paymentMethods"].length)];
    var status = reservePossible["statuses"][Math.floor(Math.random() * reservePossible["statuses"].length)];
    return {
        reserveId: reserveId,
        date: getRandomDate(earliestDate, latestDate),
        source: source,
        category: category,
        amount: getRandomCostOrAmount(5, 2000, variance),
        paymentMethod: paymentMethod,
        status: status,
        notes: "Cash in from ".concat(source)
    };
}
// --------------- Savings Data ----------------------
var savingsPossible = {
    "descriptions": [
        "Emergency Fund",
        "Vacation Savings",
        "Retirement Fund",
    ],
    "categories": [
        "Savings",
    ],
    "paymentMethods": [
        "Bank Transfer",
    ],
    "statuses": [
        "Scheduled",
        "Pending",
        "Completed"
    ],
};
// Function to generate a single SavingsData entry
function generateSavingsData(savingsId) {
    var description = savingsPossible["descriptions"][Math.floor(Math.random() * savingsPossible["descriptions"].length)];
    var category = savingsPossible["categories"][Math.floor(Math.random() * savingsPossible["categories"].length)];
    var paymentMethod = savingsPossible["paymentMethods"][Math.floor(Math.random() * savingsPossible["paymentMethods"].length)];
    var status = savingsPossible["statuses"][Math.floor(Math.random() * savingsPossible["statuses"].length)];
    return {
        savingsId: savingsId,
        date: getRandomDate(earliestDate, latestDate),
        description: description,
        category: category,
        amount: getRandomCostOrAmount(5, 100, 2),
        paymentMethod: paymentMethod,
        status: status,
        notes: "Cash in from ".concat(description)
    };
}
// --------------- Executing functions ----------------------
var scheduledOutData = [];
var reserveData = [];
var savingsData = [];
for (var i = 1; i <= numEntries; i++) {
    var id = "TX".concat(1000 + i);
    scheduledOutData.push(generateScheduledOutData(id));
    reserveData.push(generateReserveData(id));
    savingsData.push(generateSavingsData(id));
}
// Output the generated data
console.log(JSON.stringify({
    scheduledOutData: scheduledOutData,
    reserveData: reserveData,
    savingsData: savingsData
}, null, 2));
