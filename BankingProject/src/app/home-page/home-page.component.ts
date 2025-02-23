import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  // Dummy Data
  scheduledOutData = [
    {date: "2/19/25", service: "Walmart", cost: "140.04"},
    {date: "2/19/25", service: "Chipotle", cost: "13.02"},
    {date: "2/20/25", service: "AMC Movie Theater", cost: "37.22"},
    {date: "2/21/25", service: "McDonalds", cost: "25.84"},
    {date: "2/23/25", service: "Costco Gas", cost: "32.12"},
    {date: "2/23/25", service: "ShareTea", cost: "38.91"},
    {date: "2/23/25", service: "Ice Skating", cost: "19.24"},
    {date: "2/24/25", service: "Steam", cost: "69.99"},
    {date: "2/24/25", service: "Subway", cost: "12.89"},
    {date: "2/24/25", service: "Groceries", cost: "12.89"},
    {date: "2/24/25", service: "Netflix Subscription", cost: "9.99"},
    {date: "2/24/25", service: "Spotify Subscription", cost: "9.99"},
    {date: "2/24/25", service: "Pizza", cost: "13.19"}
  ]

  scheduledOutDate = "February 25, 2025"
  scheduledOutAmount = 0.00;
  reserveAmount = 1801.28;
  savingsAmount = 877.91;

  totalAmount = 0;
  scheduledOutPercentage = 0;
  reservePercentage = 0;
  savingsPercentage = 0;
  
  ngOnInit(): void {
    // Calculates total cost from data
    this.scheduledOutAmount = this.scheduledOutData.reduce((total, val) => total + parseInt(val.cost), 0.00)

    // Calculates total money in bank account
    this.totalAmount = this.scheduledOutAmount + this.reserveAmount + this.savingsAmount;

    // Calculate percentages
    this.scheduledOutPercentage = (this.scheduledOutAmount / this.totalAmount) * 100;
    this.reservePercentage = (this.reserveAmount / this.totalAmount) * 100;
    this.savingsPercentage = (this.savingsAmount / this.totalAmount) * 100;
  }
}
