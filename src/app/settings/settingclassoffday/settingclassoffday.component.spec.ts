import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingclassoffdayComponent } from './settingclassoffday.component';

describe('SettingclassoffdayComponent', () => {
  let component: SettingclassoffdayComponent;
  let fixture: ComponentFixture<SettingclassoffdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingclassoffdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingclassoffdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
