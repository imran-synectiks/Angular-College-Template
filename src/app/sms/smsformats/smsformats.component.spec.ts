import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsformatsComponent } from './smsformats.component';

describe('SmsformatsComponent', () => {
  let component: SmsformatsComponent;
  let fixture: ComponentFixture<SmsformatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsformatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsformatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
