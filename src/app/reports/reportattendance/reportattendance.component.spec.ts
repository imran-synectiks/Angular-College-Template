import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportattendanceComponent } from './reportattendance.component';

describe('ReportattendanceComponent', () => {
  let component: ReportattendanceComponent;
  let fixture: ComponentFixture<ReportattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
