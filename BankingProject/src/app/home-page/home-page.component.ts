import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]
  };

  // Bar chart options
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    }
  };
  // Bar chart type
  public barChartType: ChartType = 'bar';
  // Function to update the chart
  updateChart() {
    this.barChartData.datasets[0].data = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100];
    this.chart?.update(); // Use BaseChartDirective to update the chart
  }

  // Dummy data for scheduled out
  scheduledOutData = [
    {
      "transactionId": "TX1001",
      "date": "2/19/25",
      "service": "Walmart",
      "category": "Groceries",
      "cost": "140.04",
      "paymentMethod": "Credit Card",
      "location": {
        "storeName": "Walmart Supercenter",
        "address": "123 Main St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Monthly grocery shopping"
    },
    {
      "transactionId": "TX1002",
      "date": "2/19/25",
      "service": "Chipotle",
      "category": "Dining",
      "cost": "13.02",
      "paymentMethod": "Debit Card",
      "location": {
        "storeName": "Chipotle Mexican Grill",
        "address": "456 Elm St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Lunch with friends"
    },
    {
      "transactionId": "TX1003",
      "date": "2/20/25",
      "service": "AMC Movie Theater",
      "category": "Entertainment",
      "cost": "37.22",
      "paymentMethod": "Credit Card",
      "location": {
        "storeName": "AMC Springfield 12",
        "address": "789 Oak St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Movie night"
    },
    {
      "transactionId": "TX1004",
      "date": "2/21/25",
      "service": "McDonalds",
      "category": "Dining",
      "cost": "25.84",
      "paymentMethod": "Debit Card",
      "location": {
        "storeName": "McDonald's",
        "address": "101 Pine St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Quick dinner"
    },
    {
      "transactionId": "TX1005",
      "date": "2/23/25",
      "service": "Costco Gas",
      "category": "Transportation",
      "cost": "32.12",
      "paymentMethod": "Credit Card",
      "location": {
        "storeName": "Costco Gas Station",
        "address": "202 Maple St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Weekly gas fill-up"
    },
    {
      "transactionId": "TX1006",
      "date": "2/23/25",
      "service": "ShareTea",
      "category": "Dining",
      "cost": "38.91",
      "paymentMethod": "Debit Card",
      "location": {
        "storeName": "ShareTea",
        "address": "303 Birch St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Bubble tea with colleagues"
    },
    {
      "transactionId": "TX1007",
      "date": "2/23/25",
      "service": "Ice Skating",
      "category": "Entertainment",
      "cost": "19.24",
      "paymentMethod": "Credit Card",
      "location": {
        "storeName": "Springfield Ice Arena",
        "address": "404 Cedar St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Weekend activity"
    },
    {
      "transactionId": "TX1008",
      "date": "2/24/25",
      "service": "Steam",
      "category": "Entertainment",
      "cost": "69.99",
      "paymentMethod": "PayPal",
      "location": {
        "storeName": "Steam Online Store",
        "address": "Online",
        "latitude": null,
        "longitude": null
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Game purchase"
    },
    {
      "transactionId": "TX1009",
      "date": "2/24/25",
      "service": "Subway",
      "category": "Dining",
      "cost": "12.89",
      "paymentMethod": "Debit Card",
      "location": {
        "storeName": "Subway",
        "address": "505 Walnut St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Quick lunch"
    },
    {
      "transactionId": "TX1010",
      "date": "2/24/25",
      "service": "Groceries",
      "category": "Groceries",
      "cost": "12.89",
      "paymentMethod": "Credit Card",
      "location": {
        "storeName": "Local Grocery Store",
        "address": "606 Spruce St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Quick grocery run"
    },
    {
      "transactionId": "TX1011",
      "date": "2/24/25",
      "service": "Netflix Subscription",
      "category": "Subscriptions",
      "cost": "9.99",
      "paymentMethod": "Credit Card",
      "location": {
        "storeName": "Netflix Online",
        "address": "Online",
        "latitude": null,
        "longitude": null
      },
      "status": "Scheduled",
      "recurring": true,
      "notes": "Monthly subscription"
    },
    {
      "transactionId": "TX1012",
      "date": "2/24/25",
      "service": "Spotify Subscription",
      "category": "Subscriptions",
      "cost": "9.99",
      "paymentMethod": "Credit Card",
      "location": {
        "storeName": "Spotify Online",
        "address": "Online",
        "latitude": null,
        "longitude": null
      },
      "status": "Scheduled",
      "recurring": true,
      "notes": "Monthly subscription"
    },
    {
      "transactionId": "TX1013",
      "date": "2/24/25",
      "service": "Pizza",
      "category": "Dining",
      "cost": "13.19",
      "paymentMethod": "Debit Card",
      "location": {
        "storeName": "Local Pizza Place",
        "address": "707 Cherry St, Springfield, IL",
        "latitude": 39.781721,
        "longitude": -89.650148
      },
      "status": "Scheduled",
      "recurring": false,
      "notes": "Dinner with family"
    }
  ]

  // Dummy data for reserve
  reserveData = [
    {
      "reserveId": "RS1001",
      "date": "2/19/25",
      "source": "Salary",
      "category": "Income",
      "amount": "3000.00",
      "paymentMethod": "Direct Deposit",
      "status": "Received",
      "notes": "Monthly salary from employer"
    },
    {
      "reserveId": "RS1002",
      "date": "2/20/25",
      "source": "Freelance Work",
      "category": "Income",
      "amount": "500.00",
      "paymentMethod": "PayPal",
      "status": "Received",
      "notes": "Payment for freelance project"
    },
    {
      "reserveId": "RS1003",
      "date": "2/21/25",
      "source": "Tax Refund",
      "category": "Refund",
      "amount": "1200.00",
      "paymentMethod": "Bank Transfer",
      "status": "Pending",
      "notes": "Federal tax refund"
    },
    {
      "reserveId": "RS1004",
      "date": "2/22/25",
      "source": "Dividends",
      "category": "Investment",
      "amount": "150.00",
      "paymentMethod": "Direct Deposit",
      "status": "Received",
      "notes": "Quarterly dividends from stocks"
    },
    {
      "reserveId": "RS1005",
      "date": "2/23/25",
      "source": "Gift",
      "category": "Other",
      "amount": "100.00",
      "paymentMethod": "Cash",
      "status": "Received",
      "notes": "Birthday gift from family"
    },
    {
      "reserveId": "RS1006",
      "date": "2/24/25",
      "source": "Rental Income",
      "category": "Income",
      "amount": "800.00",
      "paymentMethod": "Bank Transfer",
      "status": "Received",
      "notes": "Monthly rent from tenant"
    },
    {
      "reserveId": "RS1007",
      "date": "2/25/25",
      "source": "Side Business",
      "category": "Income",
      "amount": "300.00",
      "paymentMethod": "Cash",
      "status": "Pending",
      "notes": "Earnings from side business"
    },
    {
      "reserveId": "RS1008",
      "date": "2/26/25",
      "source": "Interest",
      "category": "Investment",
      "amount": "50.00",
      "paymentMethod": "Direct Deposit",
      "status": "Received",
      "notes": "Monthly interest from savings account"
    },
    {
      "reserveId": "RS1009",
      "date": "2/27/25",
      "source": "Bonus",
      "category": "Income",
      "amount": "1000.00",
      "paymentMethod": "Direct Deposit",
      "status": "Received",
      "notes": "Annual performance bonus"
    },
    {
      "reserveId": "RS1010",
      "date": "2/28/25",
      "source": "Reimbursement",
      "category": "Refund",
      "amount": "75.00",
      "paymentMethod": "Bank Transfer",
      "status": "Pending",
      "notes": "Travel expense reimbursement"
    },
    {
      "reserveId": "RS1011",
      "date": "2/28/25",
      "source": "Venmo from Friend",
      "category": "Other",
      "amount": "50.00",
      "paymentMethod": "Venmo",
      "status": "Received",
      "notes": "Reimbursement for dinner"
    },
    {
      "reserveId": "RS1012",
      "date": "2/28/25",
      "source": "Zelle from Friend",
      "category": "Other",
      "amount": "30.00",
      "paymentMethod": "Zelle",
      "status": "Received",
      "notes": "Shared Uber ride cost"
    },
    {
      "reserveId": "RS1013",
      "date": "2/28/25",
      "source": "Venmo from Friend",
      "category": "Other",
      "amount": "20.00",
      "paymentMethod": "Venmo",
      "status": "Received",
      "notes": "Split cost for concert tickets"
    },
    {
      "reserveId": "RS1014",
      "date": "2/28/25",
      "source": "Zelle from Friend",
      "category": "Other",
      "amount": "15.00",
      "paymentMethod": "Zelle",
      "status": "Pending",
      "notes": "Reimbursement for coffee"
    }
  ]

  // Dummy data for savings
  savingsData = [
    {
      "savingsId": "SV1001",
      "date": "2/19/25",
      "description": "Emergency Fund",
      "category": "Savings",
      "amount": "500.00",
      "paymentMethod": "Bank Transfer",
      "status": "Completed",
      "notes": "Monthly contribution to emergency fund"
    },
    {
      "savingsId": "SV1002",
      "date": "2/20/25",
      "description": "Vacation Savings",
      "category": "Savings",
      "amount": "200.00",
      "paymentMethod": "Bank Transfer",
      "status": "Completed",
      "notes": "Saving for summer vacation"
    },
    {
      "savingsId": "SV1003",
      "date": "2/21/25",
      "description": "Retirement Fund",
      "category": "Savings",
      "amount": "300.00",
      "paymentMethod": "Bank Transfer",
      "status": "Completed",
      "notes": "Monthly retirement savings"
    }
  ]

  scheduledOutDate : string = "February 25, 2025"
  scheduledOutAmount : number = 0.00;
  reserveAmount : number = 0;
  savingsAmount : number = 0.00;

  totalAmount : number = 0;
  scheduledOutPercentage : number = 0;
  reservePercentage : number = 0;
  savingsPercentage : number = 0;

  currentTableMode : string = "scheduledOut";
  switchTableMode(mode: 'scheduledOut' | 'savings') {
    this.currentTableMode = mode;
  }
  ngOnInit(): void {
    // this.http.get('assets/dummyData.json').subscribe((data) => {
    //   this.scheduledOutData = data
    //   console.log(data);
    // });

    // Calculates total scheduledOut cost from data
    this.scheduledOutAmount = Number(
      this.scheduledOutData.reduce((total, val) => total + parseFloat(val.cost), 0.00).toFixed(2)
    );

    // Calculates total reserve from data
    this.reserveAmount = Number(
      this.reserveData.reduce((total, val) => total + parseFloat(val.amount), 0.00).toFixed(2)
    )

    // Calculates total savings from data
    this.savingsAmount = Number(
      this.savingsData.reduce((total, val) => total + parseFloat(val.amount), 0.00).toFixed(2)
    );
    
    // Calculates total money in bank account
    this.totalAmount = this.scheduledOutAmount + this.reserveAmount + this.savingsAmount;

    // Calculate percentages
    this.scheduledOutPercentage = (this.scheduledOutAmount / this.totalAmount) * 100;
    this.reservePercentage = (this.reserveAmount / this.totalAmount) * 100;
    this.savingsPercentage = (this.savingsAmount / this.totalAmount) * 100;
  }
}
