import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingholidayComponent } from './settingholiday.component';

describe('SettingholidayComponent', () => {
  let component: SettingholidayComponent;
  let fixture: ComponentFixture<SettingholidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingholidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingholidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
