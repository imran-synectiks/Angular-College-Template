import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportbarcodegenerateComponent } from './reportbarcodegenerate.component';

describe('ReportbarcodegenerateComponent', () => {
  let component: ReportbarcodegenerateComponent;
  let fixture: ComponentFixture<ReportbarcodegenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportbarcodegenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportbarcodegenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
