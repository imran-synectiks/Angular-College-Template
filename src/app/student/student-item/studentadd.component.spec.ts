import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaItemComponent } from './studenta-item.component';

describe('StudentaItemComponent', () => {
  let component: StudentaItemComponent;
  let fixture: ComponentFixture<StudentaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
