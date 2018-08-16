import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandancefileComponent } from './attandancefile.component';

describe('AttandancefileComponent', () => {
  let component: AttandancefileComponent;
  let fixture: ComponentFixture<AttandancefileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttandancefileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandancefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
