import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportaccountbalanceComponent } from './reportaccountbalance.component';

describe('ReportaccountbalanceComponent', () => {
  let component: ReportaccountbalanceComponent;
  let fixture: ComponentFixture<ReportaccountbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportaccountbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportaccountbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
