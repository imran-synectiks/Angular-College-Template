import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsearchpublicComponent } from './resultsearchpublic.component';

describe('ResultsearchpublicComponent', () => {
  let component: ResultsearchpublicComponent;
  let fixture: ComponentFixture<ResultsearchpublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsearchpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsearchpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
