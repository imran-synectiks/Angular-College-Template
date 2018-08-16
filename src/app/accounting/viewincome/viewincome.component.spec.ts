import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewincomeComponent } from './viewincome.component';

describe('ViewincomeComponent', () => {
  let component: ViewincomeComponent;
  let fixture: ComponentFixture<ViewincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
