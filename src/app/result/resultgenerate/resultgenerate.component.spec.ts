import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultgenerateComponent } from './resultgenerate.component';

describe('ResultgenerateComponent', () => {
  let component: ResultgenerateComponent;
  let fixture: ComponentFixture<ResultgenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultgenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
