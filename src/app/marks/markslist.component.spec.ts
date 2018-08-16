import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkslistComponent } from './markslist.component';

describe('MarkslistComponent', () => {
  let component: MarkslistComponent;
  let fixture: ComponentFixture<MarkslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
