import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmssendbulkComponent } from './smssendbulk.component';

describe('SmssendbulkComponent', () => {
  let component: SmssendbulkComponent;
  let fixture: ComponentFixture<SmssendbulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmssendbulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmssendbulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
