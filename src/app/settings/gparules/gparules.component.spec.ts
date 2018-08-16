import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GparulesComponent } from './gparules.component';

describe('GparulesComponent', () => {
  let component: GparulesComponent;
  let fixture: ComponentFixture<GparulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GparulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GparulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
