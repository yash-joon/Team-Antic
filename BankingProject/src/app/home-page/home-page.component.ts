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

  sortTime<T extends { date: string | number }>(data: T[]): T[] {
    return data.sort((a, b) => {
      const date1 = new Date(a.date).getTime();
      const date2 = new Date(b.date).getTime();
      return date2 - date1;
    });
  }

  getData() {
    this.http.get('assets/data/dummyData.json').subscribe((data : any) => {
      this.scheduledOutData = this.sortTime(data["scheduledOutData"]);
      this.reserveData = this.sortTime(data["reserveData"]);
      this.savingsData = this.sortTime(data["savingsData"]);
      // this.scheduledOutData = data["scheduledOutData"];
      // this.reserveData = data["reserveData"];
      // this.savingsData = data["savingsData"];

      // Transforms json data to chart data
      this.calculateDailyBalance();
      
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
      },
      {
        label: 'Reserve',
        data: [],
        borderColor: '#2b6777',
        backgroundColor: '#2b6777',
        fill: false
      },
      {
        label: 'Savings',
        data: [],
        borderColor: '#52ab98',
        backgroundColor: '#52ab98',
        fill: false
      },
      {
        label: 'Scheduled Out',
        data: [],
        borderColor: '#c94c4c',
        backgroundColor: '#c94c4c',
        fill: false
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

  // calculateDailyBalance() {
  //   const balanceByDate: { [key: string]: number } = {};

  //   // Add reserve amounts
  //   this.reserveData.forEach(entry => {
  //     const date = entry.date;
  //     const amount = parseFloat(entry.amount);
  //     balanceByDate[date] = (balanceByDate[date] || 0) + amount;
  //   });

  //   // Add savings amounts
  //   this.savingsData.forEach(entry => {
  //     const date = entry.date;
  //     const amount = parseFloat(entry.amount);
  //     balanceByDate[date] = (balanceByDate[date] || 0) + amount;
  //   });

  //   // Subtract scheduled out amounts
  //   this.scheduledOutData.forEach(entry => {
  //     const date = entry.date;
  //     const cost = parseFloat(entry.cost);
  //     balanceByDate[date] = (balanceByDate[date] || 0) - cost;
  //   });

  //   // Sort dates and calculate cumulative balance
  //   const sortedDates = Object.keys(balanceByDate).sort();
  //   let cumulativeBalance = 0;
  //   const balances: number[] = [];

  //   sortedDates.forEach(date => {
  //     cumulativeBalance += balanceByDate[date];
  //     balances.push(cumulativeBalance);
  //   });

  //   // Update chart data
  //   console.log(sortedDates)
  //   console.log(balances);
  //   this.lineChartData.labels = sortedDates;
  //   this.lineChartData.datasets[0].data = balances;

  //   this.chart?.update();
  // }

  calculateDailyBalance() {
    const balanceByDate: { [key: string]: number } = {};
    const scheduledOutBalances: { [key: string]: number } = {};
    const reserveBalances: { [key: string]: number } = {};
    const savingsBalances: { [key: string]: number } = {};

    // Helper function to parse and normalize date
    const parseDate = (dateStr: string): Date => {
        const [month, day, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day); // Months are 0-based in JS Dates
    };

    // Helper function to get the first day of the next month
    const getFirstDayOfNextMonth = (date: Date): Date => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 1);
    };

    // Add reserve amounts (non-cumulative)
    this.reserveData.forEach(entry => {
        const date = entry.date;
        const amount = parseFloat(entry.amount);
        balanceByDate[date] = (balanceByDate[date] || 0) + amount;
        reserveBalances[date] = (reserveBalances[date] || 0) + amount; // Non-cumulative
    });

    // Add savings amounts (non-cumulative)
    this.savingsData.forEach(entry => {
        const date = entry.date;
        const amount = parseFloat(entry.amount);
        balanceByDate[date] = (balanceByDate[date] || 0) + amount;
        savingsBalances[date] = (savingsBalances[date] || 0) + amount; // Non-cumulative
    });

    // Aggregate scheduled out amounts and apply them on the first day of the next month
    const scheduledOutAggregated: { [key: string]: number } = {};
    this.scheduledOutData.forEach(entry => {
        const date = parseDate(entry.date);
        const nextMonthDate = getFirstDayOfNextMonth(date);
        const nextMonthDateStr = `${nextMonthDate.getMonth() + 1}/${nextMonthDate.getDate()}/${nextMonthDate.getFullYear()}`;
        const cost = parseFloat(entry.cost);
        scheduledOutAggregated[nextMonthDateStr] = (scheduledOutAggregated[nextMonthDateStr] || 0) + cost;
    });

    // Subtract aggregated scheduled out amounts
    Object.keys(scheduledOutAggregated).forEach(date => {
        balanceByDate[date] = (balanceByDate[date] || 0) - scheduledOutAggregated[date];
        scheduledOutBalances[date] = (scheduledOutBalances[date] || 0) - scheduledOutAggregated[date]; // Non-cumulative
    });

    // Sort dates correctly
    const sortedDates = Object.keys(balanceByDate)
        .map(dateStr => ({ dateStr, dateObj: parseDate(dateStr) }))
        .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())
        .map(entry => entry.dateStr); // Convert back to string format

    // Calculate cumulative current balance
    let cumulativeBalance = 0;
    const balances: number[] = [];

    // Prepare non-cumulative balances for each category
    const reserveValues: number[] = [];
    const savingsValues: number[] = [];
    const scheduledOutValues: number[] = [];

    sortedDates.forEach(date => {
        cumulativeBalance += balanceByDate[date] || 0;
        balances.push(cumulativeBalance);

        // Non-cumulative values for each category
        reserveValues.push(reserveBalances[date] || 0);
        savingsValues.push(savingsBalances[date] || 0);
        scheduledOutValues.push(scheduledOutBalances[date] || 0);
    });

    // Calculate linear regression for cumulative balance
    const n = balances.length;
    const xValues = Array.from({ length: n }, (_, i) => i + 1); // [1, 2, 3, ..., n]
    const yValues = balances;

    // Calculate slope (m) and intercept (b) for y = mx + b
    const xMean = xValues.reduce((a, b) => a + b, 0) / n;
    const yMean = yValues.reduce((a, b) => a + b, 0) / n;

    const numerator = xValues.reduce((acc, x, i) => acc + (x - xMean) * (yValues[i] - yMean), 0);
    const denominator = xValues.reduce((acc, x) => acc + Math.pow(x - xMean, 2), 0);
    const m = numerator / denominator; // Slope
    const b = yMean - m * xMean; // Intercept

    // Generate regression line data
    const regressionLine = xValues.map(x => m * x + b);

    // Extend regression line for forecasting (e.g., next 30 days)
    const forecastDays = 30;
    const forecastXValues = Array.from({ length: n + forecastDays }, (_, i) => i + 1);
    const forecastRegressionLine = forecastXValues.map(x => m * x + b);

    // Extend labels for forecasting
    const forecastLabels = [...sortedDates];
    for (let i = 1; i <= forecastDays; i++) {
        const lastDate = parseDate(sortedDates[sortedDates.length - 1]);
        const nextDate = new Date(lastDate.getTime() + i * 24 * 60 * 60 * 1000);
        forecastLabels.push(`${nextDate.getMonth() + 1}/${nextDate.getDate()}/${nextDate.getFullYear()}`);
    }

    // Update chart data
    this.lineChartData = {
        labels: forecastLabels,
        datasets: [
            {
                label: 'Cumulative Current Balance',
                data: balances,
                backgroundColor: '#52ab98', // Green
                borderColor: '#2b6777', // Light green
                borderWidth: 1,
                fill: true,
                stack: 'stack-1' // Stacked with other datasets
            },
            {
                label: 'Incoming Reserve Balance',
                data: reserveValues,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
                borderColor: 'rgba(54, 162, 235, 1)', // Blue
                borderWidth: 1,
                fill: true,
                stack: 'stack-1' // Stacked with other datasets
            },
            {
                label: 'Incoming Savings Balance',
                data: savingsValues,
                backgroundColor: 'rgba(255, 206, 86, 0.2)', // Light orange
                borderColor: 'rgba(255, 206, 86, 1)', // Orange
                borderWidth: 1,
                fill: true,
                stack: 'stack-1' // Stacked with other datasets
            },
            {
                label: 'Incoming Scheduled Out Balance',
                data: scheduledOutValues,
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
                borderColor: 'rgba(255, 99, 132, 1)', // Red
                borderWidth: 1,
                fill: true,
                stack: 'stack-1' // Stacked with other datasets
            },
            {
                label: 'Linear Regression (Forecast)',
                data: forecastRegressionLine,
                borderColor: '#ff7f50', // Coral color for the regression line
                borderWidth: 2,
                fill: false,
                type: 'line', // Ensure this is a line chart
                pointRadius: 0, // Hide points on the regression line
                borderDash: [5, 5] // Dashed line for the regression
            }
        ]
    };

    // Chart options for animation, responsiveness, and stacking
    this.lineChartOptions = {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, // Allow the chart to resize freely
        animation: {
            duration: 1000, // 1-second animation
            easing: 'easeInOutQuad' // Smooth easing function
        },
        scales: {
            x: {
                stacked: true // Stack datasets on the X-axis
            },
            y: {
                stacked: true, // Stack datasets on the Y-axis
                title: {
                    display: true,
                    text: 'Balance ($)' // Y-axis label
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Daily Balance Over Time with Linear Regression Forecast' // Chart title
            },
            legend: {
                display: true,
                position: 'top' // Legend position
            },
            tooltip: {
                enabled: true,
                mode: 'index', // Show tooltips for all datasets at the same index
                intersect: false
            }
        }
    };

    // Update the chart
    this.chart?.update();
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

  currentTableMode: 'scheduledOut' | 'reserve' | 'savings' = 'scheduledOut';
  // Switch table mode
  switchTableMode(mode: 'scheduledOut' | 'reserve' | 'savings'): void {
    this.currentTableMode = mode;
  }

  ngOnInit(): void {
    // Retrieve data
    this.getData();
  }
}
