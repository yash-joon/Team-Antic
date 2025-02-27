import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScheduledOutData, ReserveData, SavingsData } from '../../assets/data/dummyData.interface';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(private http: HttpClient) {
    
  }

  getData() {
    this.http.get('assets/data/dummyData.json').subscribe((data : any) => {
      this.scheduledOutData = data["scheduledOutData"];
      this.reserveData = data["reserveData"];
      this.savingsData = data["savingsData"];

      // Transforms json data to chart data
      this.calculateDailyBalance();
    });
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // Line chart data
  lineChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Daily Balance',
        data: [],
        borderColor: '#2b6777',
        backgroundColor: '#52ab98',
        fill: true
      }
    ]
  };

  // Line chart options
  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Balance ($)'
        },
        beginAtZero: true
      }
    }
  };

  // Line chart type
  lineChartType: ChartType = 'line';

  calculateDailyBalance() {
    const balanceByDate: { [key: string]: number } = {};

    // Add reserve amounts
    this.reserveData.forEach(entry => {
      const date = entry.date;
      const amount = parseFloat(entry.amount);
      balanceByDate[date] = (balanceByDate[date] || 0) + amount;
    });

    // Add savings amounts
    this.savingsData.forEach(entry => {
      const date = entry.date;
      const amount = parseFloat(entry.amount);
      balanceByDate[date] = (balanceByDate[date] || 0) + amount;
    });

    // Subtract scheduled out amounts
    this.scheduledOutData.forEach(entry => {
      const date = entry.date;
      const cost = parseFloat(entry.cost);
      balanceByDate[date] = (balanceByDate[date] || 0) - cost;
    });

    // Sort dates and calculate cumulative balance
    const sortedDates = Object.keys(balanceByDate).sort();
    let cumulativeBalance = 0;
    const balances: number[] = [];

    sortedDates.forEach(date => {
      cumulativeBalance += balanceByDate[date];
      balances.push(cumulativeBalance);
    });

    // Update chart data
    this.lineChartData.labels = sortedDates;
    this.lineChartData.datasets[0].data = balances;
  }
  scheduledOutData: ScheduledOutData[] = [];
  reserveData: ReserveData[] = [];
  savingsData: SavingsData[] = [];

  scheduledOutDate : string = "February 25, 2025"
  scheduledOutAmount : number = 0;
  reserveAmount : number = 0;
  savingsAmount : number = 0;

  totalAmount : number = 0;
  scheduledOutPercentage : number = 0;
  reservePercentage : number = 0;
  savingsPercentage : number = 0;

  currentTableMode : string = "scheduledOut";
  switchTableMode(mode: 'scheduledOut' | 'reserve' | 'savings') {
    this.currentTableMode = mode;
  }
  ngOnInit(): void {
    // Retrieve data
    this.getData();

    // Calculates total scheduledOut cost from data
    this.scheduledOutAmount = Number(
      this.scheduledOutData.reduce((total, val) => total + parseFloat(val.cost), 0.00).toFixed(2)
    );

    // // Calculates total reserve from data
    this.reserveAmount = Number(
      this.reserveData.reduce((total, val) => total + parseFloat(val.amount), 0.00).toFixed(2)
    )

    // // Calculates total savings from data
    this.savingsAmount = Number(
      this.savingsData.reduce((total, val) => total + parseFloat(val.amount), 0.00).toFixed(2)
    );
    
    // // Calculates total money in bank account
    this.totalAmount = this.scheduledOutAmount + this.reserveAmount + this.savingsAmount;

    // // Calculate percentages
    this.scheduledOutPercentage = (this.scheduledOutAmount / this.totalAmount) * 100;
    this.reservePercentage = (this.reserveAmount / this.totalAmount) * 100;
    this.savingsPercentage = (this.savingsAmount / this.totalAmount) * 100;
  }
}
