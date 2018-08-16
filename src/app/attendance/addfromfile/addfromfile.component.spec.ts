import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfromfileComponent } from './addfromfile.component';

describe('AddfromfileComponent', () => {
  let component: AddfromfileComponent;
  let fixture: ComponentFixture<AddfromfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfromfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfromfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
