import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerDashboardComponent } from './passanger-dashboard.component';

describe('PassangerDashboardComponent', () => {
  let component: PassangerDashboardComponent;
  let fixture: ComponentFixture<PassangerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassangerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
