import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards-page',
  templateUrl: './rewards-page.component.html',
  styleUrl: './rewards-page.component.scss'
})
export class RewardsPageComponent implements OnInit {


  // need to pipeline this data instead 
  scheduledOutData = [
    {date: "2/19/25", service: "Walmart", cost: 140.04, type:"grocery",pointsEarned:0},
    {date: "2/19/25", service: "Chipotle", cost: 13.02, type:"dining",pointsEarned:0},
    {date: "2/20/25", service: "AMC Movie Theater", cost: 37.22, type:"entertainment",pointsEarned:0},
    {date: "2/21/25", service: "McDonalds", cost: 25.84, type:"dining",pointsEarned:0},
    {date: "2/23/25", service: "Costco Gas", cost: 32.12, type:"other",pointsEarned:0},
    {date: "2/23/25", service: "ShareTea", cost: 38.91, type:"dining",pointsEarned:0},
    {date: "2/23/25", service: "Ice Skating", cost: 19.24, type:"entertainment",pointsEarned:0},
    {date: "2/24/25", service: "Steam", cost: 69.99, type:"entertainment",pointsEarned:0},
    {date: "2/24/25", service: "Subway", cost: 12.89, type:"dining",pointsEarned:0},
    {date: "2/24/25", service: "Groceries", cost: 12.89, type:"grocery",pointsEarned:0},
    {date: "2/24/25", service: "Netflix Subscription", cost: 9.99, type:"entertainment",pointsEarned:0},
    {date: "2/24/25", service: "Spotify Subscription", cost: 9.99, type:"entertainment",pointsEarned:0},
    {date: "2/24/25", service: "Pizza", cost: 13.19, type:"dining",pointsEarned:0},
    {date: "2/25/25", service: "Airplane", cost: 300.00, type:"travel",pointsEarned:0}
  ];


  displayHoverInfo():void {
    console.log(this.scheduledOutData);
  }

  // could pipe transform this instead? and do it oninit  
  totalPoints = 0; 
  groceryPoints = 0; 
  diningPoints = 0; 
  entertainmentPoints = 0; 
  travelPoints = 0; 
  otherPoints = 0; 

  gpercent = 0;
  dpercent = 0;
  epercent = 0;
  tpercent = 0; 
  opercent = 0;


  ngOnInit(): void {
    this.getPoints();
    this.getPercents();
  }

  getPercents():void{
    this.gpercent = (this.groceryPoints / this.totalPoints) * 100;
    this.dpercent = (this.diningPoints / this.totalPoints) * 100;
    this.epercent = (this.entertainmentPoints / this.totalPoints) * 100;
    this.tpercent = (this.travelPoints / this.totalPoints) * 100;
    this.opercent = (this.otherPoints / this.totalPoints) * 100;
  }
  


  getPoints():void{
    for(let item of this.scheduledOutData){
      if(item.type == "grocery"){
        let num = +(item.cost*.02).toFixed(2);
        this.totalPoints += num;
        this.groceryPoints += num;
        item.pointsEarned = num;
  
      }else if(item.type == "dining"){
        let num = +(item.cost*.03).toFixed(2);
        this.totalPoints += num;
        this.diningPoints += num;
        item.pointsEarned = num;
        
      }else if(item.type == "entertainment"){
        let num = +(item.cost*.015).toFixed(2);
        this.totalPoints += num;
        this.entertainmentPoints += num;
        item.pointsEarned = num;
      
      }else if(item.type == "travel"){
        let num = +(item.cost*.04).toFixed(2);
        this.totalPoints += num;
        this.travelPoints += num;
        item.pointsEarned = num;
  
      }else{ // other 
        let num = +(item.cost*.01).toFixed(2);
        this.totalPoints += num;
        this.otherPoints += num;
        item.pointsEarned = num;
      }
    }

  }

}
