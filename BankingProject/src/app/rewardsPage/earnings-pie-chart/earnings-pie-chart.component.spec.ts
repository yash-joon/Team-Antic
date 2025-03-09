import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsPieChartComponent } from './earnings-pie-chart.component';

describe('EarningsPieChartComponent', () => {
  let component: EarningsPieChartComponent;
  let fixture: ComponentFixture<EarningsPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarningsPieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarningsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
