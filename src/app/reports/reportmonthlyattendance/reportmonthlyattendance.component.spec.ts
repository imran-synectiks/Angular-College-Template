import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportmonthlyattendanceComponent } from './reportmonthlyattendance.component';

describe('ReportmonthlyattendanceComponent', () => {
  let component: ReportmonthlyattendanceComponent;
  let fixture: ComponentFixture<ReportmonthlyattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportmonthlyattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportmonthlyattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
