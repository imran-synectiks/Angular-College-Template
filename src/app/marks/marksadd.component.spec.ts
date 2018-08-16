import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksaddComponent } from './marksadd.component';

describe('MarksaddComponent', () => {
  let component: MarksaddComponent;
  let fixture: ComponentFixture<MarksaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
