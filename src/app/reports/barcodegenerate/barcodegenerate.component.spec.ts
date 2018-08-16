import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodegenerateComponent } from './barcodegenerate.component';

describe('BarcodegenerateComponent', () => {
  let component: BarcodegenerateComponent;
  let fixture: ComponentFixture<BarcodegenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodegenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodegenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
