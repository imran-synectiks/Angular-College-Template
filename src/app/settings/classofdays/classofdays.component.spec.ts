import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassofdaysComponent } from './classofdays.component';

describe('ClassofdaysComponent', () => {
  let component: ClassofdaysComponent;
  let fixture: ComponentFixture<ClassofdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassofdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassofdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
