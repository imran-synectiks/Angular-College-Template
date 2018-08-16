import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettinginstituteComponent } from './settinginstitute.component';

describe('SettinginstituteComponent', () => {
  let component: SettinginstituteComponent;
  let fixture: ComponentFixture<SettinginstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettinginstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettinginstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
