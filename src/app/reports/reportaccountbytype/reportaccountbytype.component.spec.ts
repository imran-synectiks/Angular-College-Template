import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportaccountbytypeComponent } from './reportaccountbytype.component';

describe('ReportaccountbytypeComponent', () => {
  let component: ReportaccountbytypeComponent;
  let fixture: ComponentFixture<ReportaccountbytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportaccountbytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportaccountbytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
