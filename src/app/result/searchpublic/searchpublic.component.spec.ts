import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpublicComponent } from './searchpublic.component';

describe('SearchpublicComponent', () => {
  let component: SearchpublicComponent;
  let fixture: ComponentFixture<SearchpublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
