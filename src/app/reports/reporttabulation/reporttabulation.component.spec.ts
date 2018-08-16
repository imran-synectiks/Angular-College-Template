import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporttabulationComponent } from './reporttabulation.component';

describe('ReporttabulationComponent', () => {
  let component: ReporttabulationComponent;
  let fixture: ComponentFixture<ReporttabulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporttabulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporttabulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
