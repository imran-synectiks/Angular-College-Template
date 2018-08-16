import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingsectorComponent } from './accountingsector.component';

describe('AccountingsectorComponent', () => {
  let component: AccountingsectorComponent;
  let fixture: ComponentFixture<AccountingsectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingsectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
