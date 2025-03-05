import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ScheduledOutData } from '../../assets/data/dummyData.interface';
@Component({
  selector: 'app-rewards-page',
  templateUrl: './rewards-page.component.html',
  styleUrl: './rewards-page.component.scss'
})
export class RewardsPageComponent implements OnInit {


  chartOptions: any = {};
  scheduledOutData: ScheduledOutData[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTransactions();

  }
  getTransactions():void{
    this.dataService.getTransactions().subscribe(
      (data: ScheduledOutData[]) => {
        this.scheduledOutData = data.map(item => ({
          transactionId: item.transactionId,
          date: item.date,
          service: item.service,
          cost:item.cost,
          category: item.category,
          paymentMethod: item.paymentMethod, 
          location: item.location, 
          status: item.status, 
          recurring: item.recurring, 
          notes: item.notes, 
          pointsEarned: 0,
        }));
        this.getPoints();
        this.createPieChart();
        
      }
    )

  }

  createPieChart():void{
    this.chartOptions = {
      series: [this.groceryPoints, this.diningPoints, this.entertainmentPoints, this.travelPoints, this.otherPoints],
      labels: ["Grocery", "Dining", "Entertainment", "Travel", "Other"],
      chart: {
        type: "donut"
      },
      plotOptions: {
        pie: {
          donut: {
            size: "75%"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val.toFixed(2) + "%";
        }
      },
      legend: {
        position: "bottom"
      }
    }
  }

  groceryPoints = 0; 
  diningPoints = 0; 
  entertainmentPoints = 0; 
  travelPoints = 0; 
  otherPoints = 0; 
  totalPoints = 0;

  getPoints():void{
    for(let item of this.scheduledOutData){
      if(item.category == "Groceries"){
        let num = +(Number(item.cost)*.02).toFixed(2);
        this.groceryPoints += num;
        item.pointsEarned = num;
        this.totalPoints += num;
      }else if(item.category == "Dining"){
        let num = +(Number(item.cost)*.03).toFixed(2);
        this.diningPoints += num;
        item.pointsEarned = num;
        this.totalPoints += num;
      }else if(item.category == "Entertainment"){
        let num = +(Number(item.cost)*.015).toFixed(2);
        this.entertainmentPoints += num;
        item.pointsEarned = num;
        this.totalPoints += num;
      }else if(item.category == "Transportation"){
        let num = +(Number(item.cost)*.04).toFixed(2);
        this.travelPoints += num;
        item.pointsEarned = num;
        this.totalPoints += num;
      }else{ // other 
        let num = +(Number(item.cost)*.01).toFixed(2);
        this.otherPoints += num;
        item.pointsEarned = num;
        this.totalPoints += num;
      }
    }
    this.totalPoints = Number(this.totalPoints.toFixed(2));
    this.groceryPoints = Number(this.groceryPoints.toFixed(2));
    this.diningPoints = Number(this.diningPoints.toFixed(2));
    this.entertainmentPoints = Number(this.entertainmentPoints.toFixed(2));
    this.travelPoints = Number(this.travelPoints.toFixed(2));
    this.otherPoints = Number(this.otherPoints.toFixed(2));
  }

}
