import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassaddComponent } from './classadd.component';

describe('ClassaddComponent', () => {
  let component: ClassaddComponent;
  let fixture: ComponentFixture<ClassaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
