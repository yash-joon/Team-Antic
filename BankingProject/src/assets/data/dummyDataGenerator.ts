import { ScheduledOutData, ReserveData, SavingsData } from "./dummyData.interface";


// vvvvvvvvvvvvvvvv CHANGE THESE VALUES vvvvvvvvvvvvvvvv
const numEntries = 200;
const variance = 8; // cost = cost * variance
const earliestDate : Date = new Date(2024, 1, 25); // Year, Month(0-11), Day(1-31)
const latestDate : Date = new Date(2025, 1, 25); // Year, Month(0-11), Day(1-31)

// ^^^^^^^^^^^^^^^^ CHANGE THESE VALUES ^^^^^^^^^^^^^^^^



// -----------Helper Functions----------

// Helper function to generate a random date
function getRandomDate(start: Date, end: Date): string {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function getRandomCostOrAmount(min: number, max: number, variance: number): string {
    // Ensure variance is within the valid range (1 to 10)
    variance = Math.max(1, Math.min(10, variance));

    // Map variance to a scaling factor (e.g., 0% to 50%)
    const maxScalingFactor = 0.5; // 50% for variance = 10
    const scalingFactor = (variance - 1) / 9 * maxScalingFactor; // Linearly map 1–10 to 0–0.5

    // Generate a random value within the range [min, max]
    const baseValue = Math.random() * (max - min) + min;

    // Adjust the value based on the scaling factor
    const adjustedValue = baseValue * (1 + (Math.random() * 2 - 1) * scalingFactor);

    // Round to 2 decimal places and return as a string
    return adjustedValue.toFixed(2);
}

// Helper function to generate a random latitude/longitude
function getRandomLatLong(): { latitude: number; longitude: number } {
    return {
        latitude: 39.781721 + (Math.random() - 0.5) * 0.1,
        longitude: -89.650148 + (Math.random() - 0.5) * 0.1,
    };
}


// -----------ScheduledOutData ---------

// List of possible services, categories, payment methods, and statuses
const scheduledOutPossible = {
    "services" : [
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
    "categories" : [
        "Groceries",
        "Dining",
        "Entertainment",
        "Transportation",
        "Subscriptions"
    ],
    "paymentMethods" : [
        "Credit Card",
        "Debit Card",
        "PayPal"
    ],
    "statuses" : [
        "Scheduled",
        "Pending",
        "Completed"
    ]
}

// Function to generate a single ScheduledOutData entry
function generateScheduledOutData(transactionId: string): ScheduledOutData {
    const service = scheduledOutPossible["services"][Math.floor(Math.random() * scheduledOutPossible["services"].length)];
    const category = scheduledOutPossible["categories"][Math.floor(Math.random() * scheduledOutPossible["categories"].length)];
    const paymentMethod = scheduledOutPossible["paymentMethods"][Math.floor(Math.random() * scheduledOutPossible["paymentMethods"].length)];
    const status = scheduledOutPossible["statuses"][Math.floor(Math.random() * scheduledOutPossible["statuses"].length)];
    const { latitude, longitude } = getRandomLatLong();

    return {
        transactionId,
        date: getRandomDate(earliestDate, latestDate),
        service,
        category,
        cost: getRandomCostOrAmount(5, 1000*Math.random()*2, variance),
        paymentMethod,
        location: {
            storeName: service,
            address: `${Math.floor(Math.random() * 1000) + 1} Main St, Springfield, IL`,
            latitude,
            longitude,
        },
        status,
        recurring: Math.random() < 0.2, // 20% chance of being recurring
        notes: `Transaction for ${service}`,
    };
}




// --------------- Reserve Data ----------------------

const reservePossible = {
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
    "paymentMethods" : [
        "Credit",
        "Debit",
        "Direct Deposit",
        "PayPal",
        "Cash",
        "Zelle",
        "Venmo",
    ],
    "statuses" : [
        "Scheduled",
        "Pending",
        "Completed"
    ],
}

// Function to generate a single ReserveData entry
function generateReserveData(reserveId: string): ReserveData {
    const source = reservePossible["sources"][Math.floor(Math.random() * reservePossible["sources"].length)];
    const category = reservePossible["categories"][Math.floor(Math.random() * reservePossible["categories"].length)];
    const paymentMethod = reservePossible["paymentMethods"][Math.floor(Math.random() * reservePossible["paymentMethods"].length)];
    const status = reservePossible["statuses"][Math.floor(Math.random() * reservePossible["statuses"].length)];
    return {
        reserveId,
        date: getRandomDate(earliestDate, latestDate),
        source,
        category,
        amount: getRandomCostOrAmount(5, 2000, variance),
        paymentMethod,
        status,
        notes: `Cash in from ${source}`
    }

}

// --------------- Savings Data ----------------------

const savingsPossible = {
    "descriptions": [
        "Emergency Fund",
        "Vacation Savings",
        "Retirement Fund",
    ],
    "categories": [
        "Savings",
    ],
    "paymentMethods" : [
        "Bank Transfer",
    ],
    "statuses" : [
        "Scheduled",
        "Pending",
        "Completed"
    ],
}

// Function to generate a single SavingsData entry
function generateSavingsData(savingsId: string): SavingsData {
    const description = savingsPossible["descriptions"][Math.floor(Math.random() * savingsPossible["descriptions"].length)];
    const category = savingsPossible["categories"][Math.floor(Math.random() * savingsPossible["categories"].length)];
    const paymentMethod = savingsPossible["paymentMethods"][Math.floor(Math.random() * savingsPossible["paymentMethods"].length)];
    const status = savingsPossible["statuses"][Math.floor(Math.random() * savingsPossible["statuses"].length)];
    return {
        savingsId,
        date: getRandomDate(earliestDate, latestDate),
        description,
        category,
        amount: getRandomCostOrAmount(5, 100, 2),
        paymentMethod,
        status,
        notes: `Cash in from ${description}`
    }

}


// --------------- Executing functions ----------------------

const scheduledOutData: ScheduledOutData[] = [];
const reserveData: ReserveData[] = [];
const savingsData: SavingsData[] = [];

for (let i = 1; i <= numEntries; i++) {
    let id = `TX${1000 + i}`
    scheduledOutData.push(generateScheduledOutData(id));
    reserveData.push(generateReserveData(id));
    savingsData.push(generateSavingsData(id));
}

// Output the generated data
console.log(JSON.stringify({
    scheduledOutData,
    reserveData,
    savingsData    
 }, null, 2));

