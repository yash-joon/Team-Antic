import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import{ScheduledOutData} from '../assets/data/dummyData.interface' 

@Injectable({
    providedIn: 'root'
  })


  export class DataService {
    private jsonUrl = 'assets/data/dummyData.json';

    constructor(
        private http: HttpClient
    ) {}

    getTransactions(): Observable<ScheduledOutData[]>{
        return this.http.get<{ scheduledOutData: ScheduledOutData[] }>(this.jsonUrl).pipe(
            map(res => res.scheduledOutData)
        );
    }

  }
