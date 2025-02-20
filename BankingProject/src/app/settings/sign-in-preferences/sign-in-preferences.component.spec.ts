import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPreferencesComponent } from './sign-in-preferences.component';

describe('SignInPreferencesComponent', () => {
  let component: SignInPreferencesComponent;
  let fixture: ComponentFixture<SignInPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInPreferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
