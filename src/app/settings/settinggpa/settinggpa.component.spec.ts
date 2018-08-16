import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettinggpaComponent } from './settinggpa.component';

describe('SettinggpaComponent', () => {
  let component: SettinggpaComponent;
  let fixture: ComponentFixture<SettinggpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettinggpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettinggpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
