export interface ScheduledOutData {
    transactionId: string;
    date: string;
    service: string;
    category: string;
    cost: string;
    paymentMethod: string;
    location: {
        storeName: string;
        address: string;
        latitude: number;
        longitude: number;
    },
    status: string;
    recurring: boolean;
    notes: string;
    pointsEarned:number;
    // quarter: string;
}
  
export interface ReserveData {
    reserveId: string;
    date: string;
    source: string;
    category: string;
    amount: string;
    paymentMethod: string;
    status: string;
    notes: string;
}

export interface SavingsData {
    savingsId: string;
    date: string;
    description: string;
    category: string;
    amount: string;
    paymentMethod: string;
    status: string;
    notes: string;
}
