import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulationsheetComponent } from './tabulationsheet.component';

describe('TabulationsheetComponent', () => {
  let component: TabulationsheetComponent;
  let fixture: ComponentFixture<TabulationsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabulationsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabulationsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
